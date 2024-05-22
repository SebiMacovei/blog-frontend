import React, {useState} from "react";
import {Layout} from "../Layout.jsx";
import {Input} from "@nextui-org/react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export function BlogAdd() {
    return (
        <Layout>
            <div className={"flex h-[calc(100%-64px)] justify-center items-center"}>
                <div
                    className="flex max-w-[600px] max-h-[600px] flex-col gap-6 px-8 py-8 rounded-2xl flex justify-center items-top bg-amber-200 from-pink-500 to-yellow-500 text-white shadow-lg">
                    <Input
                        label="Title:"
                        isClearable
                        radius="lg"
                        classNames={{
                            label: "text-black/50 dark:text-white/90",
                            input: [
                                "bg-red-200",
                                "text-black/90 dark:text-white/90",
                                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                            ],
                            innerWrapper: "bg-red-200",
                            inputWrapper: [
                                "shadow-xl",
                                "bg-red-200",
                                "dark:bg-default/60",
                                "backdrop-blur-xl",
                                "backdrop-saturate-200",
                                "hover:bg-default-200/70",
                                "dark:hover:bg-default/70",
                                "group-data-[focus=true]:bg-default-200/50",
                                "dark:group-data-[focus=true]:bg-default/60",
                                "!cursor-text",
                            ],
                        }}
                        placeholder="Add a title to your blog..."
                    />
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor&nbsp;5!</p>"
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event) => {
                            console.log(event);
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </div>
            </div>
        </Layout>
    )
}
