# React Simple Bottom Sheet 🎉

A simple bottom sheet component for your React apps - **best for PWAs** 🔥

[![Preview](https://user-images.githubusercontent.com/25549784/111182978-bbb67500-85af-11eb-8494-d6eda161e499.gif)](https://www.youtube.com/watch?v=RGLwYiSEKAc)

## Installation 🚀

This library is built with [framer-motion](https://github.com/framer/motion) and [styled-components](https://styled-components.com/) therefore you have to install first these two dependencies on your project.

`npm install framer-motion styled-components` or `yarn add framer-motion styled-components`

then

`npm install react-simple-bottom-sheet` or `yarn add react-simple-bottom-sheet`

## Sample Usage 💻

    import React from "react";
    import { bottomSheet } from "react-simple-bottom-sheet";

    export  default  function App() {
        const handleOpen = () => bottomSheet.create({
    	    content: (<p>Hello world!</p>),
        });
        return <button onClick={handleOpen}>Open</button>
    }

You can check `example/src` folder to know more!

## API 👋

- `bottomSheet.create(createConfig)`
- `bottomSheet.close(closeConfig)`
- `bottomSheet.isOpen(id)`

The properties of config are as follows:

#### create({...})

| Property     | Description                             | Type                                                                                       | Default              |
| ------------ | --------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------- |
| id           | Unique identifier of the bottom sheet   | string                                                                                     | `"default"`          |
| content      | Main content of bottom sheet (required) | ReactNode                                                                                  | -                    |
| header       | Header content of bottom sheet          | ReactNode                                                                                  | -                    |
| footer       | Footer content of bottom sheet          | ReactNode                                                                                  | -                    |
| dragHandle   | Draggable elements of bottom sheet      | `['content' \| 'header \| 'footer' \| 'mask']`                                             | `['header', 'mask']` |
| onClose      | function                                | Trigger when bottom sheet is closed                                                        | -                    |
| onOpen       | function                                | Trigger when bottom sheet is opened                                                        | -                    |
| darkMode     | boolean                                 | Changes the appearance of bottom sheet to dark mode                                        | false                |
| maskClosable | boolean                                 | Whether to close the modal dialog when the mask (area outside the bottom sheet) is clicked | true                 |
| debug        | boolean                                 | Enables debug mode to show the draggable areas                                             | false                |

#### close({...})

| Property | Description                                                                 | Type     | Default     |
| -------- | --------------------------------------------------------------------------- | -------- | ----------- |
| id       | Unique identifier of the bottom sheet that needs to be closed               | string   | `"default"` |
| callback | Specifies the function that will be called after the bottom sheet is closed | function | -           |

#### isOpen(id)

| Property | Description                                                                  | Type   | Default     |
| -------- | ---------------------------------------------------------------------------- | ------ | ----------- |
| id       | Unique identifier of the bottom sheet that needs to be checked if it's open. | string | `"default"` |

## Note 🗒

Putting clickable elements such as Buttons, Inputs, etc. on draggable areas is not possible as of the moment - still working on it.

## Donation 🙏

If this project help you reduce time to develop, you can give me a cup of ☕️ or ☕️ :)

[
![Paypal donate button](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)
](https://www.paypal.com/paypalme/chcepe)

## License 🙌

> Copyright (c) 2021 chcepe.github.io
>
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
