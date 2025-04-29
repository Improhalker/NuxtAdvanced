<template>
    <article>
        <section class="bg-gradient-to-br from-[#abf8ea] via-[#54306e] to-[#253342] dark:from-surface dark:to-background p-8 mt-8 text-center h-[90vh] flex flex-col justify-center items-center 
         animate-gradient-slow bg-[length:200%_200%]">

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-gray-900 mb-6">I'm Gabriel
                Estrela</h1>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface dark:text-purple-600 mb-6">
                Building the web, <span class="text-yellow-400 dark:text-accentHover">Securing the future</span>
            </h2>
            <p class="text-lg text-white dark:text-gray-700 font-semibold mb-8">
                Passionate about creating robust, efficient, and secure web applications.
            </p>
            <div class="flex gap-4">
                <button
                    class="dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded text-xl transition duration-300">
                    Blog
                </button>
                <button
                    class="dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded text-xl transition duration-300">
                    Projects
                </button>
            </div>
        </section>
        <section class="bg-white dark:bg-gray-800 p-8 mt-8 text-center rounded-lg shadow-lg">
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">ABOUT ME</h1>
            <div class="w-16 h-1 dark:bg-purple-600 bg-yellow-400 mx-auto mb-4 rounded-sm"></div>
            <p class="text-lg text-gray-600 dark:text-gray-300">
                Here you definetily will find more information about me, what i do, my current skills mostly in therms
                of
                programming and technolgy knowledge!
            </p>

            <div class="flex flex-wrap w-3/4 place-self-center justify-center mt-2 sm:mt-4 md:mt-8 gap-4">
                <div class="sm:text-start mt-4 md:mt-8 gap-8">
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Let you know me!</h2>

                    <p class="text-lg text-gray-600 dark:text-gray-300 mt-2 max-w-2xl">
                        I am currently working at Postali Marketing Digital, performing Full Stack tasks. On the front
                        end,
                        I
                        work with Vue, Nuxt, JavaScript, TypeScript, Tailwind, and Bootstrap. I handle legacy projects
                        and
                        have
                        the expertise to start new projects from scratch as well.
                    </p>
                </div>
                <div class="w-[500px] mt-2 sm:mt-4 md:mt-8 gap-8 ">
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-start">My Skills</h2>
                    <ul class="grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg text-gray-600 dark:text-gray-300">
                        <li v-for="skill in skills" :key="skill"
                            class="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow transition duration-300 transform hover:scale-105 hover:bg-accent hover:text-white dark:hover:bg-accentHover text-center">
                            {{ skill }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                'PHP', 'Vue', 'Nuxt', 'JavaScript', 'TypeScript',
                'SQL', 'Laravel', 'Node.js', 'React',
                'Tailwind', 'Bootstrap', 'Security Actions', 'SEO', 'Analytics', 'Tag Manager', 'Wordpress'
            ]
        };
    }
};
</script>