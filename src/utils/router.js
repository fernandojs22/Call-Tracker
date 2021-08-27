export function loadable(loadFunc) {
    const OtherComponent = React.lazy(loadFunc)

    return function LoadableWrapper(loadableProps) {
        return (
            <OtherComponent {...loadableProps} />
        )
    }
}