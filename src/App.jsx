function App() {
  return (
    <div className="wrapper mb-20 flex flex-col">
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold text-sky-900">
          Vite + React + Tailwind
        </h1>
        <p className="text-lg font-bold my-3">
          These are the command I used to set up React App with Vite and then
          installed Tailwind CSS
        </p>
      </div>
      <div className="code-snippets flex flex-col justify-center space-y-4 max-w-2xl mx-auto">
        <p className="font-light text-center w-[80%] mx-auto">
          First, let's install Vite and setup React application, it is super
          fast. Let's Begin!
        </p>
        <code className="bg-gray-900 text-stone-300 py-2 px-10 rounded-md w-[80%] mx-auto">
          npm create vite@latest
        </code>
        <p className="font-light w-[80%] mx-auto">
          Then follow the prompts! You can also directly specify the project
          name and the template you want to use via additional command line
          options. For example, to scaffold a Vite + Vue project, run:
        </p>
        <code className="bg-gray-900 text-stone-300 py-2 px-10 rounded-md w-[80%] mx-auto">
          # npm 7+, extra double-dash is needed: <br /> npm create vite@latest
          my-vue-app -- --template vue
        </code>
        <p className="font-light w-[80%] mx-auto">
          Lastly, let's cd into the project and/or open the folder with VS Code
          and then use the following commands to install the dependencies and
          start your Local server.
        </p>
        <code className="bg-gray-900 text-stone-300 py-2 px-10 rounded-md w-[80%] mx-auto">
          cd my-project <br />
          npm install <br />
          npm run dev
        </code>
        <p className="font-light w-[80%] mx-auto text-center">
          Now let's install Tailwind CSS, because... why not?
        </p>
        <code className="bg-gray-900 text-stone-300 py-2 px-10 rounded-md w-[80%] mx-auto">
          <div className="flex">
            <span>
              <svg
                viewBox="0 -9 3 24"
                aria-hidden="true"
                class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"
              >
                <path
                  d="M0 0L3 3L0 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <span>npm install -D tailwindcss postcss autoprefixer</span>
          </div>
          <div className="flex">
            <span>
              <svg
                viewBox="0 -9 3 24"
                aria-hidden="true"
                class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"
              >
                <path
                  d="M0 0L3 3L0 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <span>npx tailwindcss init -p</span>
          </div>
        </code>
        <p className="font-light w-[80%] mx-auto text-center">
          Now let's configure the template paths. <br />
          Add the paths to all of your template files in the{" "}
          <code> tailwind.config.cjs</code> file.
        </p>
        <code className="bg-gray-900 text-stone-300 py-2 px-10 rounded-md w-[80%] mx-auto">
          {" "}
          content: [ "./index.html", "./src/**/*.js,ts,jsx,tsx", ],
        </code>
        <p className="font-light w-[80%] mx-auto text-center">
          {" "}
          Be sure to put curly braces before and after the js,ts,jsx,tsx file
          extensions.
        </p>
        <p className="font-light w-[80%] mx-auto text-center">
          Let's add the Tailwind directives to our CSS file.
        </p>
        <code className="bg-gray-900 text-stone-300 py-2 px-10 rounded-md w-[80%] mx-auto">
          @tailwind base;
          <br /> @tailwind components;
          <br /> @tailwind utilities;
        </code>
        <p className="font-light w-[80%] mx-auto text-center">
          Done! We are ready to run our build process with...
        </p>
        <code className="bg-gray-900 text-stone-300 py-2 px-10 rounded-md w-[80%] mx-auto">
          <div className="flex">
            <span>
              <svg
                viewBox="0 -9 3 24"
                aria-hidden="true"
                class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"
              >
                <path
                  d="M0 0L3 3L0 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <span>npm run dev</span>
          </div>
        </code>
      </div>
      <div className="max-w-2xl w-fit mx-auto text-center my-5">
        Thank you, this template will help me get the necessary commands for
        setting it up quickly.
      </div>
    </div>
  );
}

export default App;
