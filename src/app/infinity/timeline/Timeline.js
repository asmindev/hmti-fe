import React from "react";

const TimelineItem = ({ time, icon, title, description, author }) => {
    return (
        <div className="flex gap-x-3 mb-8">
            {/* Left content with time */}
            <div className="w-16 text-end">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                    {time}
                </span>
            </div>

            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div
                        className={`rounded-full bg-gray-400 dark:bg-gray-600 ${
                            icon
                                ? "size-2 bg-blue-400 dark:bg-blue-600"
                                : "size-3 border-2 border-white ring-1 ring-gray-400 dark:ring-gray-600"
                        }`}
                    >
                        {icon}
                    </div>
                </div>
            </div>

            {/* Right content */}
            <div className="grow pt-0.5">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                    {title}
                </h3>
                {description && (
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {description}
                    </p>
                )}
                {author && (
                    <button
                        type="button"
                        className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                        {author}
                    </button>
                )}
            </div>
        </div>
    );
};

const Timeline = ({ items }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl">
                {items.map((item) => (
                    <TimelineItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
