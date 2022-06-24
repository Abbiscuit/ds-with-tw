import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <main>
      <div className="border-b bg-gray-50 px-10 py-10">
        <div className="space-y-4">
          <h1 className="text-6xl font-semibold">Personal Design System</h1>
          <p className="text-black/60">
            This is a simple design system (or design tokens) for my personal
            projects
          </p>
        </div>
      </div>

      <section id="button" className="px-10 py-10">
        <h2 className="text-4xl font-semibold">Button</h2>
        <div className="mt-5 space-y-10">
          <div>
            <p className="text-base font-semibold">Primary</p>
            <div className="mt-5 flex flex-row gap-x-10">
              <button className="rounded border border-gray-100 bg-gray-100 px-4 py-2 text-sm uppercase shadow-md shadow-gray-100/50">
                Subscribe
              </button>
              <button className="rounded border border-blue-600 bg-blue-600 px-4 py-2 text-sm uppercase text-white shadow-md shadow-blue-600/50">
                Subscribe
              </button>
              <button className="rounded border border-yellow-500 bg-yellow-500 px-4 py-2 text-sm uppercase text-black shadow-md shadow-yellow-500/50">
                Warning
              </button>

              <button className="rounded border border-red-600 bg-red-600 px-4 py-2 text-sm uppercase text-white shadow-md shadow-red-600/50">
                Danger
              </button>

              <button className="rounded border border-emerald-600 bg-emerald-600 px-4 py-2 text-sm uppercase text-white shadow-md shadow-emerald-600/50">
                Success
              </button>
            </div>
          </div>
          <div>
            <p className="text-base font-semibold">Text</p>
            <div className="mt-5 flex flex-row gap-x-10">
              <button className="rounded border border-transparent bg-transparent px-4 py-2 text-sm uppercase">
                Subscribe
              </button>
              <button className="rounded border border-transparent bg-transparent px-4 py-2 text-sm uppercase text-blue-600">
                Subscribe
              </button>
              <button className="rounded border border-transparent bg-transparent px-4 py-2 text-sm uppercase text-yellow-600">
                Warning
              </button>

              <button className="rounded border border-transparent bg-transparent px-4 py-2 text-sm uppercase text-red-600">
                Danger
              </button>

              <button className="rounded border border-transparent bg-transparent px-4 py-2 text-sm uppercase text-emerald-600">
                Success
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="utils" className="px-10 py-10">
        <h2 className="text-4xl font-semibold">Utils</h2>
        <div className="mt-5 space-y-10">
          <div>
            <p className="text-base font-semibold">Spacer</p>
            <div className="mt-5 flex flex-row gap-x-10">
              <div className="rounded border border-gray-100 bg-gray-100 px-4 py-2 text-sm uppercase shadow-md shadow-gray-100/50">
                Button
              </div>

              <div
                aria-label="Spacer Example"
                className="flex flex-1 items-center justify-center place-self-stretch bg-gray-50"
              >
                Spacer
              </div>

              <div className="rounded border border-blue-600 bg-blue-600 px-4 py-2 text-sm uppercase text-white shadow-md shadow-blue-600/50">
                Button
              </div>
              <div className="rounded border border-blue-600 bg-blue-600 px-4 py-2 text-sm uppercase text-white shadow-md shadow-blue-600/50">
                Button
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dialog" className="px-10 py-10">
        <h2 className="text-4xl font-semibold">Dialog</h2>
        <div className="mt-5 space-y-10">
          <div>
            <p className="text-base font-semibold">Dialog</p>
            <div className="mt-5 flex flex-row gap-x-10">
              <Dialog>
                <button className="rounded border border-gray-100 bg-gray-100 px-4 py-2 text-sm uppercase shadow-md shadow-gray-100/50">
                  Open Dialog
                </button>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Page;

type DialogProp = {
  readonly children: ReactNode;
};
const Dialog = ({ children }: DialogProp) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal></DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50"></DialogPrimitive.Overlay>
      <DialogPrimitive.Content className="fixed top-1/2 left-1/2 max-w-screen-sm -translate-y-1/2 -translate-x-1/2 transform bg-white p-5">
        <DialogPrimitive.Title className="text-lg font-medium">
          TITLE
        </DialogPrimitive.Title>
        <DialogPrimitive.Description className="my-2.5 mx-5 text-base leading-normal">
          DESCRIPTION
        </DialogPrimitive.Description>
        <DialogPrimitive.Close>Close</DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Root>
  );
};
