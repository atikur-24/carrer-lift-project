import React from 'react';

const Blogs = () => {
    return (
        <section>
            <div className="bg-[#F9F9FF] py-28 relative">
                <img className='absolute -top-28 right-0' src="/All Images/Vector-1.png" alt="vector" />
                    <h1 className="text-center text-3xl font-extrabold">Blogs</h1>
                <img className='absolute bottom-0 left-0' src="/All Images/Vector.png" alt="vector" />
            </div>

            <div className='px-12 md:px-32 my-32'>
                <div className='p-3 mb-6 border border-inherit rounded-md'>
                    <h2 className='text-2xl font-extrabold text-[#474747] tracking-wide mb-4'>1. When should have use context API?</h2>
                    <p className='text-[#757575] text-[18px] leading-relaxed tracking-wide'>Context is primarily used when some data needs to be accessible by many components at different nesting levels. This happens when an intermediate component updates using shouldComponentUpdate, React will automatically assume there are no changes and reuse the entire subtree. The problem with that is if the subtree contains a context consumer, the consumer will not receive the latest context. Some scenarios where want to use context api : global setting or preferences, User authentication, Theme or styling, Localization Overall, the Context API is a powerful tool for managing shared state in your React application. It can help you avoid prop drilling and keep your code organized and easy to maintain. However, it's important to use it judiciously and be mindful of performance considerations.</p>
                </div>
                <div className='p-7 mb-6 border border-inherit rounded-md'>
                    <h2 className='text-2xl font-extrabold text-[#474747] tracking-wide mb-4'>2. What is a custom hook?</h2>
                    <p className='text-[#757575] text-[18px] leading-relaxed tracking-wide'>
                    Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app. custom hooks allow you to extract common functionality from your components into a separate function that can be used in multiple components, making your code more modular and reusable. In summary, custom hooks allow you to encapsulate complex logic and state management into a single function that can be used across multiple components. To create a custom hook, you simply define a function that uses one or more of React's built-in hooks. To use a custom hook, you call it like any other hook in your component.
                    </p>
                </div>
                <div className='p-7 mb-6 border border-inherit rounded-md'>
                    <h2 className='text-2xl font-extrabold text-[#474747] tracking-wide mb-4'>3. What is useRef?</h2>
                    <p className='text-[#757575] text-[18px] leading-relaxed tracking-wide'>A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master.
                    useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.In summary, useRef is a powerful tool for working with mutable values and references in React. It allows you to store a reference to a DOM element or any other mutable value without triggering a re-render, making your code more efficient and performant.
                    </p>
                </div>
                <div className='p-7 mb-6 border border-inherit rounded-md'>
                    <h2 className='text-2xl font-extrabold text-[#474747] tracking-wide mb-5'>4. What is useMemo?</h2>
                    <p className='text-[#757575] text-[18px] leading-relaxed'>
                    useMemo is a built-in hook in React that allows you to memoize the result of a function so that it only recomputes when its dependencies change. In other words, it provides a way to optimize the performance of expensive calculations or complex rendering logic that only need to be updated when certain data changes. If you have a large codebase and your application is slow, then you can check whether there are any unnecessary renders on the page or not. If so, restrict them with the useMemo hook; this speeds up your app and makes it more efficient.
                    </p>
                </div>
            </div>
           
        </section>
    );
};

export default Blogs;