import './styles/ls-date-picker-dark.css'
import './styles/ls-date-picker-standard.css'

export const LSDatePicker = (props) => {
    const style = props?.style ?? {}
    const headerText = props?.headerText
    if (!style.backgroundColor) style.backgroundColor = `#f0f0f0`
    if (!style.border) style.border = `1px solid #ccc`
    if (!style.borderRadius) style.borderRadius = `4px`
    if (!style.padding) style.padding = `8px`
    if (!style.display) style.display = `inline-block`
    if (!style.margin) style.margin = `8px`

    return (
        <div className={`ls-date-picker-wrapper`} style={style}>
            <div className={`ls-date-picker-inner`}>
                <div className={`ls-date-picker-header-text`}>{headerText}</div>
                <div className={`ls-date-picker-calendar-wrapper`}>
                    <div className={`ls-date-picker-calendar-inner`}>
                        <div className={`ls-date-picker-calendar-header`}>
                            <div
                                className={`ls-date-picker-calendar-header-inner`}
                                style={{
                                    display: `flex`,
                                    justifyContent: `space-between`,
                                    padding: `4px 8px`,
                                }}
                            >
                                <div
                                    className={`ls-date-picker-calendar-header-left`}
                                >
                                    <div
                                        className={`ls-date-picker-calendar-header-left-inner`}
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
                                    className={`ls-date-picker-calendar-header-right`}
                                >
                                    <div
                                        className={`ls-date-picker-calendar-header-right-inner`}
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
