import { useState, useEffect, useMemo } from "react";
import Amount from "../Amount/Amount";
import Input from "../Input";
import type { ExtendedRangeProps } from "./types";
import {
  RangeContainer,
  Header,
  Title,
  Calculation,
  RangeBody,
  RangeNumber,
  RangeStepContainer,
  RangeStepNumber,
  RangeStepInput,
} from "./Range.style";

function Range({
  product,
  steps,
  stepValue,
  mode = "range",
  step = 1,
  value: initialValue,
  onChange,
  className,
  ...props
}: ExtendedRangeProps & React.HTMLAttributes<HTMLDivElement>) {
  // Режим steps
  if (mode === "steps" && steps && steps.length > 0) {
    return (
      <RangeStepsComponent
        steps={steps}
        stepValue={stepValue}
        onChange={onChange}
        className={className}
        {...props}
      />
    );
  }

  // Режим range (оригинальный)
  const { min, max, title, calculation } = product;

  // Определяем начальное значение
  const initial = initialValue || min;
  const [value, setValue] = useState<number>(initial);

  // Обновляем значение при изменении initialValue
  useEffect(() => {
    if (initialValue !== undefined) {
      setValue(initialValue);
    }
  }, [initialValue]);

  const handleProduct = (newValue: number) => {
    setValue(newValue);
    onChange(newValue);
  };

  const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newValue = Number(event.target.value);
    handleProduct(newValue);
  };

  const setToMin = () => {
    handleProduct(min);
  };

  const setToMax = () => {
    handleProduct(max);
  };

  return (
    <RangeContainer className={className}>
      <Header>
        <Title>{title}</Title>
        {calculation && <Calculation>{calculation}</Calculation>}

        <Amount
          value={Math.max(min, value)}
          onChange={handleProduct}
          min={min}
          max={max}
          step={step}
          center={false}
        />
      </Header>

      <RangeBody $hasSteps={false}>
        <Input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleRange}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
        />

        <RangeNumber
          onClick={setToMin}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setToMin()}
          aria-label={`Установить минимальное значение: ${min}`}
        >
          {min}
        </RangeNumber>

        <RangeNumber
          onClick={setToMax}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setToMax()}
          aria-label={`Установить максимальное значение: ${max}`}
        >
          {max}
        </RangeNumber>
      </RangeBody>
    </RangeContainer>
  );
}

// Компонент для режима steps
function RangeStepsComponent({
  steps,
  stepValue: initialStepValue,
  onChange,
  className,
  ...props
}: {
  steps: Array<{ id: string | number; name: string; value?: number }>;
  stepValue?: string | number;
  onChange: (value: any) => void;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    if (initialStepValue !== undefined) {
      const index = steps.findIndex((step) => step.id === initialStepValue);
      return index >= 0 ? index : 0;
    }
    return 0;
  });

  const stepsLength = steps.length;
  const MIN = 0;
  const MAX = stepsLength - 1;

  // Извлекаем название и расчет из текущего шага
  const currentStep = steps[currentIndex];
  const stepTitle = useMemo(() => {
    const nameParts = currentStep.name.split(", ");
    return nameParts[0];
  }, [currentStep]);

  const stepCalculation = useMemo(() => {
    const nameParts = currentStep.name.split(", ");
    return nameParts.slice(1).join(" ");
  }, [currentStep]);

  // Обновляем индекс при изменении stepValue извне
  useEffect(() => {
    if (initialStepValue !== undefined) {
      const index = steps.findIndex((step) => step.id === initialStepValue);
      if (index >= 0 && index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  }, [initialStepValue, steps, currentIndex]);

  const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newIndex = Number(event.target.value);
    setCurrentIndex(newIndex);
    onChange(steps[newIndex].id);
  };

  const handleStepClick = (index: number) => {
    setCurrentIndex(index);
    onChange(steps[index].id);
  };

  return (
    <RangeContainer className={className} {...props}>
      <Header>
        <Title>{stepTitle}</Title>
        {stepCalculation && <Calculation>{stepCalculation}</Calculation>}

        <Amount
          value={currentIndex + 1}
          onChange={(val) => {
            const newIndex = Math.max(0, Math.min(stepsLength - 1, val - 1));
            handleStepClick(newIndex);
          }}
          min={1}
          max={stepsLength}
          step={1}
          center={false}
        />
      </Header>

      <RangeStepContainer $stepsCount={stepsLength}>
        <RangeStepInput
          type="range"
          value={currentIndex}
          min={MIN}
          max={MAX}
          step={1}
          onChange={handleRange}
          aria-valuenow={currentIndex}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
        />

        {/* Отображение всех шагов */}
        {steps.map((step, index) => {
          const displayValue =
            step.name.match(/(\d+)\s*x/)?.[1] || step.name.split(", ")[0];

          return (
            <RangeStepNumber
              key={step.id}
              onClick={() => handleStepClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleStepClick(index)}
              $isActive={index === currentIndex}
              aria-label={`Выбрать ${step.name}`}
              aria-current={index === currentIndex ? "true" : "false"}
            >
              {displayValue}
            </RangeStepNumber>
          );
        })}
      </RangeStepContainer>
    </RangeContainer>
  );
}

export default Range;
