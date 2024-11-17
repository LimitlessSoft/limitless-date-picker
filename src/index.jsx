import React from 'react'

import './styles/ls-date-picker-dark.css'
import './styles/ls-date-picker-standard.css'

export const LSDatePicker = (props) => {
    const headerText = props?.headerText
    const theme = props?.theme ?? 'standard'

    return (
        <div className={`ls-date-picker-wrapper-${theme}`}>
            <div className={`ls-date-picker-inner-${theme}`}>
                <div className={`ls-date-picker-header-text-${theme}`}>
                    {headerText}
                </div>
                <div className={`ls-date-picker-calendar-wrapper-${theme}`}>
                    <div className={`ls-date-picker-calendar-inner-${theme}`}>
                        <div
                            className={`ls-date-picker-calendar-header-${theme}`}
                        >
                            <div
                                className={`ls-date-picker-calendar-header-inner-${theme}`}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '4px 8px',
                                }}
                            >
                                <div
                                    className={`ls-date-picker-calendar-header-left-${theme}`}
                                >
                                    <div
                                        className={`ls-date-picker-calendar-header-left-inner-${theme}`}
                                    >
                                        ‹
                                    </div>
                                </div>
                                <div
                                    className={`ls-date-picker-calendar-header-center`}
                                >
                                    <div
                                        className={`ls-date-picker-calendar-header-center-inner`}
                                    >
                                        August 2021
                                    </div>
                                </div>
                                <div
                                    className={`ls-date-picker-calendar-header-right-${theme}`}
                                >
                                    <div
                                        className={`ls-date-picker-calendar-header-right-inner-${theme}`}
                                    >
                                        ›
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LSDatePicker
