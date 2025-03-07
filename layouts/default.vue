<template>
    <div>
        <nav>
            <ul>
                <li>
                   <NuxtLink to="/" >Main</NuxtLink>
                </li>
                <li>
                   <NuxtLink to="/about" >About</NuxtLink>
                </li>
                
                <li>
                   <NuxtLink to="/blog/" >Blog</NuxtLink>
                </li>
            </ul>
        </nav>
        0 references
        <slot/>
    </div>
</template>