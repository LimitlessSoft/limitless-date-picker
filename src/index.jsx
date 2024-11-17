import React from 'react'

import './styles/ls-date-picker-common.css'
import './styles/ls-date-picker-dark.css'
import './styles/ls-date-picker-standard.css'

function LSDatePicker(props) {
    const headerText = props?.headerText
    const theme = props?.theme ?? 'standard'

    const [a, setA] = React.useState(0)

    return (
        <div
            className={`ls-date-picker-wrapper ls-date-picker-wrapper-${theme}`}
        >
            {a}
            <div
                className={`ls-date-picker-inner ls-date-picker-inner-${theme}`}
            >
                <div
                    className={`ls-date-picker-header-text ls-date-picker-header-text-${theme}`}
                >
                    {headerText}
                </div>
                <div
                    className={`ls-date-picker-calendar-wrapper ls-date-picker-calendar-wrapper-${theme}`}
                >
                    <div
                        className={`ls-date-picker-calendar-inner ls-date-picker-calendar-inner-${theme}`}
                    >
                        <div
                            className={`ls-date-picker-calendar-header ls-date-picker-calendar-header-${theme}`}
                        >
                            <div
                                className={`ls-date-picker-calendar-header-inner ls-date-picker-calendar-header-inner-${theme}`}
                            >
                                <div
                                    className={`ls-date-picker-calendar-header-left ls-date-picker-calendar-header-left-${theme}`}
                                >
                                    <div
                                        className={`ls-date-picker-calendar-header-left-inner ls-date-picker-calendar-header-left-inner-${theme}`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 32 32"
                                        >
                                            <g data-name="91-Arrow Left">
                                                <path d="M16 32a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm0-30a14 14 0 1 0 14 14A14 14 0 0 0 16 2z" />
                                                <path d="m18.29 24.71-8-8a1 1 0 0 1 0-1.41l8-8 1.41 1.41L12.41 16l7.29 7.29z" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`ls-date-picker-calendar-header-center ls-date-picker-calendar-header-center-${theme}`}
                                >
                                    <div
                                        className={`ls-date-picker-calendar-header-center-inner ls-date-picker-calendar-header-center-inner-${theme}`}
                                    >
                                        August 2021
                                    </div>
                                </div>
                                <div
                                    className={`ls-date-picker-calendar-header-right ls-date-picker-calendar-header-right-${theme}`}
                                >
                                    <div
                                        className={`ls-date-picker-calendar-header-right-inner ls-date-picker-calendar-header-right-inner-${theme}`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 32 32"
                                        >
                                            <g
                                                data-name="91-Arrow Left"
                                                transform="scale(-1, 1) translate(-32, 0)"
                                            >
                                                <path d="M16 32a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm0-30a14 14 0 1 0 14 14A14 14 0 0 0 16 2z" />
                                                <path d="m18.29 24.71-8-8a1 1 0 0 1 0-1.41l8-8 1.41 1.41L12.41 16l7.29 7.29z" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`ls-date-picker-calendar-body ls-date-picker-calendar-body-${theme}`}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default LSDatePicker
