import { scanSteps } from "@/constants/scanSteps"

export const StepTracker = ({ currentStep = 1 }) => {
  return (
    <div className="relative w-full py-8">
      {/* Horizontal Line */}
      <div className="absolute top-8 left-0 w-full h-[2px] bg-gray-200 dark:bg-neutral-700" />

      <div className="relative flex justify-between items-center">
        {scanSteps.map((step, index) => {
          const isActive = step.id === currentStep
          const isCompleted = step.id < currentStep

          return (
            <div key={step.id} className="flex flex-col items-center z-10">
              {/* Circle */}
              <div
                className={`
                  w-14 h-14 rounded-full flex items-center justify-center
                  border transition-all duration-300
                  ${
                    isActive
                      ? "bg-teal-500 border-teal-500 text-white shadow-lg shadow-teal-500/30 scale-110"
                      : isCompleted
                      ? "bg-teal-100 border-teal-500 text-teal-600 dark:bg-teal-900/30"
                      : "bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-700 text-gray-400"
                  }
                `}
              >
                {/* Replace with icon */}
                <span className="text-sm font-semibold">
                  {step.id}
                </span>
              </div>

              {/* Label */}
              <p
                className={`
                  mt-3 text-sm font-medium
                  ${
                    isActive
                      ? "text-teal-600"
                      : "text-gray-500 dark:text-gray-400"
                  }
                `}
              >
                {step.label}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}