import React, { useState, useEffect } from "react";
import "./Calendar.css";

// Tipos de días especiales
export type DayType = "normal" | "selected" | "highlighted" | "special";

// Interfaz para un día del calendario
export interface CalendarDay {
  date: Date;
  type?: DayType;
  isCurrentMonth: boolean;
  isSelectable?: boolean;
  specialColor?: string;
}

// Información para marcar días destacados o especiales
export interface MarkedDate {
  date: Date;
  type: DayType;
  specialColor?: string;
}

export interface CalendarProps {
  /**
   * Fecha inicial seleccionada
   */
  selectedDate?: Date;

  /**
   * Mes y año mostrados inicialmente
   */
  initialDate?: Date;

  /**
   * Cantidad de meses a mostrar en vista desktop
   */
  monthsToShow?: number;

  /**
   * Fecha mínima seleccionable
   */
  minDate?: Date;

  /**
   * Fecha máxima seleccionable
   */
  maxDate?: Date;

  /**
   * Función que se dispara al seleccionar una fecha
   */
  onDateSelect?: (date: Date) => void;

  /**
   * Permitir selección de rangos de fechas
   */
  rangeSelection?: boolean;

  /**
   * Fechas marcadas especiales (destacadas, subrayadas, etc.)
   */
  markedDates?: MarkedDate[];

  /**
   * Mostrar versión mobile (un mes) o desktop (varios meses)
   */
  variant?: "desktop" | "mobile";

  /**
   * Clases CSS adicionales
   */
  className?: string;

  /**
   * Etiquetas personalizadas para los días de la semana
   */
  weekdayLabels?: string[];

  /**
   * Etiquetas personalizadas para los meses
   */
  monthLabels?: string[];
}

// Nombres de los días de la semana en español
const DEFAULT_WEEKDAY_LABELS = ["L", "M", "X", "J", "V", "S", "D"];

// Nombres de los meses en español
const DEFAULT_MONTH_LABELS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// Limitar el número máximo de meses a renderizar
const MAX_MONTHS_TO_SHOW = 12;

/**
 * Genera un array con las fechas del mes y los días del mes anterior/siguiente necesarios para completar semanas
 */
const generateMonthDays = (
  year: number,
  month: number,
  markedDates: MarkedDate[] = [],
  minDate?: Date,
  maxDate?: Date
): CalendarDay[] => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  let firstDayOfCalendar = new Date(firstDayOfMonth);
  // Ajustar para que la semana comience el lunes (0 = lunes, 6 = domingo)
  const firstDayWeekday = (firstDayOfMonth.getDay() + 6) % 7;
  firstDayOfCalendar.setDate(firstDayOfMonth.getDate() - firstDayWeekday);

  const days: CalendarDay[] = [];
  const currentDate = new Date(firstDayOfCalendar);

  // Generar 42 días (6 semanas) para asegurar que el calendario esté completo
  for (let i = 0; i < 42; i++) {
    const isCurrentMonth = currentDate.getMonth() === month;
    const isSelectable =
      (!minDate || currentDate >= minDate) &&
      (!maxDate || currentDate <= maxDate);

    // Buscar si este día está marcado como especial
    const markedDate = markedDates.find(
      (marked) =>
        marked.date.getDate() === currentDate.getDate() &&
        marked.date.getMonth() === currentDate.getMonth() &&
        marked.date.getFullYear() === currentDate.getFullYear()
    );

    days.push({
      date: new Date(currentDate),
      isCurrentMonth,
      isSelectable,
      type: markedDate?.type || "normal",
      specialColor: markedDate?.specialColor,
    });

    currentDate.setDate(currentDate.getDate() + 1);

    // Si ya hemos completado el mes y estamos en una nueva semana, podemos terminar
    if (!isCurrentMonth && currentDate.getDay() === 1 && i >= 35) {
      break;
    }
  }

  return days;
};

/**
 * Componente Calendar para selección de fechas
 */
export const Calendar: React.FC<CalendarProps> = ({
  selectedDate = new Date(),
  initialDate,
  monthsToShow = 12,
  minDate,
  maxDate,
  onDateSelect,
  rangeSelection = false,
  markedDates = [],
  variant = "desktop",
  className = "",
  weekdayLabels = DEFAULT_WEEKDAY_LABELS,
  monthLabels = DEFAULT_MONTH_LABELS,
}) => {
  // Limitar monthsToShow para evitar problemas de rendimiento
  const limitedMonthsToShow = Math.min(monthsToShow, MAX_MONTHS_TO_SHOW);

  // Estado para la fecha actual del calendario
  const [currentDate, setCurrentDate] = useState<Date>(
    initialDate || selectedDate || new Date()
  );

  // Estado para la(s) fecha(s) seleccionada(s)
  const [selection, setSelection] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: selectedDate || null,
    endDate: rangeSelection ? null : selectedDate || null,
  });

  // Generar los meses necesarios para la visualización
  const generateMonthsGrid = () => {
    const months = [];
    const startDate = new Date(currentDate);

    if (variant === "mobile") {
      // En móvil solo mostramos un mes
      return [
        generateMonthDays(
          startDate.getFullYear(),
          startDate.getMonth(),
          markedDates,
          minDate,
          maxDate
        ),
      ];
    }

    // En desktop mostramos varios meses (pero limitados para prevenir problemas de rendimiento)
    startDate.setMonth(0); // Comenzamos desde enero

    for (let i = 0; i < limitedMonthsToShow; i++) {
      const monthYear = new Date(startDate);
      monthYear.setMonth(monthYear.getMonth() + i);

      months.push(
        generateMonthDays(
          monthYear.getFullYear(),
          monthYear.getMonth(),
          markedDates,
          minDate,
          maxDate
        )
      );
    }

    return months;
  };

  // Estado para los meses a mostrar
  const [monthsGrid, setMonthsGrid] = useState(generateMonthsGrid());

  // Regenerar el grid solo cuando cambian las dependencias importantes
  useEffect(() => {
    setMonthsGrid(generateMonthsGrid());
  }, [
    currentDate.getFullYear(),
    currentDate.getMonth(),
    variant,
    limitedMonthsToShow,
    // Convertir markedDates a una cadena solo si cambia
    JSON.stringify(
      markedDates.map(
        (md) =>
          `${md.date.getFullYear()}-${md.date.getMonth()}-${md.date.getDate()}-${md.type}`
      )
    ),
    minDate?.getTime(),
    maxDate?.getTime(),
  ]);

  // Manejar selección de fecha
  const handleDateClick = (day: CalendarDay) => {
    if (!day.isSelectable) return;

    if (rangeSelection) {
      // Lógica para selección de rango
      if (!selection.startDate || selection.endDate) {
        // Primera selección o reinicio
        setSelection({
          startDate: day.date,
          endDate: null,
        });
      } else {
        // Segunda selección
        if (day.date < selection.startDate) {
          setSelection({
            startDate: day.date,
            endDate: selection.startDate,
          });
        } else {
          setSelection({
            startDate: selection.startDate,
            endDate: day.date,
          });
        }
      }
    } else {
      // Selección simple
      setSelection({
        startDate: day.date,
        endDate: day.date,
      });
    }

    if (onDateSelect) {
      onDateSelect(day.date);
    }
  };

  // Verificar si un día está dentro del rango seleccionado
  const isInSelectedRange = (day: CalendarDay) => {
    if (!rangeSelection || !selection.startDate || !selection.endDate)
      return false;
    return day.date >= selection.startDate && day.date <= selection.endDate;
  };

  // Verificar si un día es el inicio o fin del rango
  const isRangeEndpoint = (day: CalendarDay) => {
    if (!selection.startDate) return false;

    const isSameDate = (date1: Date, date2: Date) => {
      return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
      );
    };

    return (
      isSameDate(day.date, selection.startDate) ||
      (selection.endDate && isSameDate(day.date, selection.endDate))
    );
  };

  // Navegar al mes/año anterior
  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate);
    if (variant === "mobile") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setFullYear(newDate.getFullYear() - 1);
    }
    setCurrentDate(newDate);
  };

  // Navegar al mes/año siguiente
  const goToNextMonth = () => {
    const newDate = new Date(currentDate);
    if (variant === "mobile") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else {
      newDate.setFullYear(newDate.getFullYear() + 1);
    }
    setCurrentDate(newDate);
  };

  // Renderizar un mes completo
  const renderMonth = (monthDays: CalendarDay[], monthIndex: number) => {
    // Determinar el mes que se está mostrando
    const monthDate =
      monthDays.find((day) => day.isCurrentMonth)?.date || new Date();
    const monthName = monthLabels[monthDate.getMonth()];

    // Agrupar días por semanas para mejor estructura
    const weeks: CalendarDay[][] = [];
    let currentWeek: CalendarDay[] = [];

    monthDays.forEach((day, index) => {
      currentWeek.push(day);

      // Cada 7 días o al final, creamos una nueva semana
      if (currentWeek.length === 7 || index === monthDays.length - 1) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    return (
      <div key={`month-${monthIndex}`} className="qida-calendar__month">
        <div className="qida-calendar__month-name">{monthName}</div>
        <div className="qida-calendar__month-grid">
          {/* Cabecera de días de la semana */}
          {weekdayLabels.map((label, i) => (
            <div key={`weekday-${i}`} className="qida-calendar__weekday">
              {label}
            </div>
          ))}

          {/* Días del mes */}
          {weeks.map((week, weekIndex) => (
            <React.Fragment key={`week-${weekIndex}`}>
              {week.map((day, dayIndex) => {
                // Determinar las clases CSS para cada día
                const dayClasses = [
                  "qida-calendar__day",
                  day.isCurrentMonth
                    ? "qida-calendar__day--current-month"
                    : "qida-calendar__day--other-month",
                  !day.isSelectable ? "qida-calendar__day--disabled" : "",
                  day.type === "highlighted"
                    ? "qida-calendar__day--highlighted"
                    : "",
                  day.type === "special" ? "qida-calendar__day--special" : "",
                  isRangeEndpoint(day) ? "qida-calendar__day--selected" : "",
                  isInSelectedRange(day) ? "qida-calendar__day--in-range" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                // Estilos personalizados para colores especiales
                const dayStyle = day.specialColor
                  ? ({
                      "--day-special-color": day.specialColor,
                    } as React.CSSProperties)
                  : undefined;

                return (
                  <div
                    key={`day-${weekIndex}-${dayIndex}`}
                    className={dayClasses}
                    style={dayStyle}
                    onClick={() => handleDateClick(day)}
                    role="button"
                    tabIndex={day.isSelectable ? 0 : -1}
                    aria-label={`${day.date.getDate()} de ${monthLabels[day.date.getMonth()]} de ${day.date.getFullYear()}`}
                    aria-disabled={!day.isSelectable}
                    aria-selected={isRangeEndpoint(day)}
                  >
                    {day.date.getDate()}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  // Renderizar navegación (solo para móvil)
  const renderNavigation = () => {
    if (variant !== "mobile") return null;

    const monthYear = `${monthLabels[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    return (
      <div className="qida-calendar__navigation">
        <button
          className="qida-calendar__nav-button"
          onClick={goToPreviousMonth}
          aria-label="Mes anterior"
        >
          <ChevronIcon direction="left" />
        </button>
        <div className="qida-calendar__nav-title">{monthYear}</div>
        <button
          className="qida-calendar__nav-button"
          onClick={goToNextMonth}
          aria-label="Mes siguiente"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    );
  };

  // Clases principales del componente
  const calendarClasses = [
    "qida-calendar",
    `qida-calendar--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={calendarClasses}>
      {renderNavigation()}

      <div className={`qida-calendar__grid qida-calendar__grid--${variant}`}>
        {monthsGrid.map((monthDays, index) => renderMonth(monthDays, index))}
      </div>
    </div>
  );
};

// Componente auxiliar para íconos de chevron
interface ChevronIconProps {
  direction: "left" | "right";
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ direction }) => {
  return (
    <div
      className={`qida-calendar__chevron qida-calendar__chevron--${direction}`}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "left" ? (
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
};

export default Calendar;
