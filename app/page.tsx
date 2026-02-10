"use client";
import Image from "next/image";
import Button from "./shared/components/form/button/button";
import Input from "./shared/components/form/input/input";
import Link from "next/link";
import { TbPlayerTrackNext } from "react-icons/tb";
import { IoDocumentTextSharp } from "react-icons/io5";
import TextArea from "./shared/components/form/textarea/textarea";
export default function Home() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-center flex flex-col items-center justify-center h-[500px] aspect-square rounded-full relative">
          <div className="w-full h-full flex justify-center items-center flex-col ">
            <div className="relative w-[170px] h-[150px] flex items-center justify-center">
              {/* soft backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-xl" />

              {/* logo container */}
              <div className="relative rounded-full overflow-hidden w-[170px] h-[150px] bg-white shadow-md ring-1 ring-black/5">
                <Image
                  src="/notton-logo.png"
                  alt="notton-logo.png"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h1 className="mt-6 text-[3rem] font-semibold tracking-tight text-gray-900">
              Next.js Boilerplate
            </h1>

            <p className="mt-1 text-base text-gray-500">
              Opinionated starter for modern React teams
            </p>

            <div className="mt-6 flex gap-2">
              <Link href="#component">
                <Button
                  label="Docs"
                  variant="primary"
                  className="font-medium"
                  icon={<IoDocumentTextSharp className="text-lg" />}
                />
              </Link>

              <Link href="#github">
                <Button
                  label="GitHub"
                  variant="primary"
                  className="font-medium"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h2 id="component" className="text-[2rem] font-bold px-20 mb-5">
        Components
      </h2>
      <div className="w-full pb-20 flex px-20 gap-[5rem]">
        <div>
          <h2 className=" text-[1.5rem] font-bold">Input Bar</h2>
          <div className="w-full flex mt-2 gap-10">
            <div className="w-[500px]">
              <Input label="Text Input" value="" onChange={() => {}} />
              <Input
                label="Email Input"
                value="example@email.com"
                onChange={() => {}}
                type="email"
              />
              <Input
                label="Password Input"
                value="zxcv1234"
                onChange={() => {}}
                type="password"
              />
              <Input
                label="Number Input"
                value="12"
                onChange={() => {}}
                type="number"
              />
              <Input
                label="Error Input"
                value=""
                onChange={() => {}}
                error="Value Required"
              />
            </div>
          </div>
        </div>
        <PropDetailsTable
          rows={[
            {
              name: "value",
              desc: "Current value of the input",
              required: true,
            },
            {
              name: "type",
              desc: "HTML input type (e.g. text, password, email)",
              required: false,
            },
            {
              name: "label",
              desc: "Label text displayed above the input",
              required: false,
            },
            {
              name: "className",
              desc: "Additional Tailwind / CSS classes for styling",
              required: false,
            },
            {
              name: "placeholder",
              desc: "Hint text shown inside the input",
              required: false,
            },
            {
              name: "error",
              desc: "Error message displayed below the input",
              required: false,
            },
            {
              name: "onChange",
              desc: "Callback fired when input value changes",
              required: true,
            },
            {
              name: "disabled",
              desc: "Disables the input when set to true",
              required: false,
            },
          ]}
        />
      </div>
      <div className="w-full pb-20 flex px-20 gap-[5rem]">
        <div>
          <h2 className=" text-[1.5rem] font-bold">Textarea</h2>
          <div className="w-full flex mt-2 gap-10">
            <div className="w-[500px]">
              <TextArea
                value=""
                onChange={() => {}}
                label="Textarea Input"
                rows={7}
              ></TextArea>
              <TextArea
                value=""
                onChange={() => {}}
                label="Error Textarea Input"
                error="Value Required"
                rows={7}
              ></TextArea>
            </div>
          </div>
        </div>
        <PropDetailsTable
          rows={[
            {
              name: "label",
              desc: "Label text displayed above the textarea",
              required: false,
            },
            {
              name: "placeholder",
              desc: "Hint text shown inside the textarea",
              required: false,
            },
            {
              name: "error",
              desc: "Error message displayed below the textarea",
              required: false,
            },
            {
              name: "value",
              desc: "Current value of the textarea",
              required: true,
            },
            {
              name: "onChange",
              desc: "Callback fired when textarea value changes",
              required: true,
            },
            {
              name: "disabled",
              desc: "Disables the textarea when set to true",
              required: false,
            },
            {
              name: "rows",
              desc: "Number of visible text lines for the textarea",
              required: false,
            },
            {
              name: "cols",
              desc: "Visible width of the textarea in characters",
              required: false,
            },
            {
              name: "allowNewLine",
              desc: "Allows or prevents new line input (Enter key)",
              required: false,
            },
            {
              name: "className",
              desc: "Additional CSS or Tailwind classes for custom styling",
              required: false,
            },
          ]}
        />
      </div>
      <div className="w-full pb-20 flex px-20 gap-[5rem]">
        <div>
          <h2 className=" text-[1.5rem] font-bold">Button</h2>
          <div className="w-full flex mt-2 gap-10">
            <div className="w-[500px] pt-5">
              <Button label="Primary" className="text-center mb-5" />
              <Button
                label="Danger"
                className="text-center mb-5"
                variant="danger"
              />
              <Button
                label="Disable"
                className="text-center mb-5"
                variant="disable"
              />
              <Button
                label="Icon Left"
                className="text-center mb-5"
                variant="primary"
                iconAlign="left"
                icon={<TbPlayerTrackNext />}
              />
              <Button
                label="Icon Right"
                className="text-center mb-5"
                variant="primary"
                icon={<TbPlayerTrackNext />}
                iconAlign="right"
              />

              <Button
                label="Loading"
                className="text-center "
                variant="disable"
                isLoading={true}
              />
            </div>
          </div>
        </div>
        <PropDetailsTable
          rows={[
            {
              name: "label",
              desc: "Text displayed inside the button",
              required: true,
            },
            {
              name: "className",
              desc: "Additional CSS or Tailwind classes for custom styling",
              required: false,
            },
            {
              name: "variant",
              desc: "Visual style of the button (primary, disable, danger)",
              required: false,
            },
            {
              name: "isLoading",
              desc: "Shows loading state and disables interaction",
              required: false,
            },
            {
              name: "onClick",
              desc: "Callback fired when the button is clicked",
              required: false,
            },
            {
              name: "type",
              desc: "HTML button type (submit or button)",
              required: false,
            },
            {
              name: "icon",
              desc: "Icon element displayed inside the button",
              required: false,
            },
            {
              name: "iconAlign",
              desc: "Position of the icon relative to the label (left or right)",
              required: false,
            },
          ]}
        />
      </div>
    </>
  );
}

function PropDetailsTable({
  rows,
}: {
  rows: { name: string; desc: string; required: boolean }[];
}) {
  return (
    <>
      <div className="flex-1">
        <h2 className="text-[1.5rem] font-bold">Props</h2>
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-left mt-5">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-5 py-3 text-sm font-semibold uppercase tracking-wide border border-gray-300">
                Name
              </th>
              <th className="px-5 py-3 text-sm font-semibold uppercase tracking-wide border border-gray-300">
                Description
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {rows.map((value) => {
              return (
                <>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 text-base font-medium text-gray-900 border border-gray-300">
                      {value.name}{" "}
                      {!value.required && (
                        <>
                          <span className="text-sm text-gray-400">
                            {" "}
                            optional
                          </span>
                        </>
                      )}
                    </td>
                    <td className="px-5 py-3 text-base text-gray-600 border border-gray-300">
                      {value.desc}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
