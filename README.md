# useContext
**Overview**
The useContext hook allows you to share data between components without having to manually pass it down through the component tree as props.

# Usage
<br>Create a context object using React.createContext(). You can provide an initial value for the context as an argument to this function.
<br>Wrap the components that need access to the context data in a provider component, using the Provider component created by the createContext() function. Pass the context value as a prop to the provider.
<br>In the child components, use the useContext hook to access the context value.

# useRef
**Overview**
The useRef hook provides a way to create a reference to a value that persists across renders. This can be useful for storing mutable values, or for accessing and modifying DOM elements.

# Usage
<br>Create a ref object using the useRef hook. You can provide an initial value for the ref as an argument to this function.
<br>Assign the ref to a DOM element using the ref prop, or use it to store a reference to a component instance.
<br>Access or modify the value of the ref using the current property.




