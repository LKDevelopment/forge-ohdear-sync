<template>


    <div id="app">


        <div class="flex justify-center p-2 bg-red">

            <img src="https://forge.laravel.com/images/forge-logo.svg" class="w-auto h-12" style="margin-right:-50px">

            <div class="text-white w-24 text-center h-12 mt-1"><i class="fas fa-arrow-right fa-3x"></i></div>

            <svg viewBox="0 0 200 225" xmlns="http://www.w3.org/2000/svg" class="w-auto h-12">
                <g fill="#FFF" fill-rule="evenodd">
                    <path d="M40.024 100.67a70.675 70.675 0 0 0-10.88 37.76c0 39.299 32.032 71.295 71.463 71.295 39.392 0 71.465-31.957 71.465-71.295 0-15.23-4.81-29.356-12.998-40.947A382.178 382.178 0 0 0 175 94.18a85.763 85.763 0 0 1 12.262 44.289c.039 47.661-38.841 86.45-86.655 86.45-47.774 0-86.654-38.789-86.654-86.45 0-14.522 3.61-28.22 9.98-40.249 5.35.932 10.715 1.75 16.091 2.45z"></path>
                    <path d="M199.815 150.325c0 7.263-5.903 13.192-13.222 13.192-7.28 0-13.223-5.89-13.223-13.192v-10.05c0-7.302 5.903-13.191 13.223-13.191 7.28 0 13.222 5.889 13.222 13.19v10.051zM27.176 150.325c0 7.263-5.903 13.192-13.223 13.192-7.28 0-13.222-5.89-13.222-13.192v-10.05c0-7.302 5.903-13.191 13.222-13.191 7.32 0 13.223 5.889 13.223 13.19v10.051z" fill-rule="nonzero"></path>
                    <path d="M12.26 129.91a1.72 1.72 0 0 1-1.73 1.728 1.745 1.745 0 0 1-1.732-1.728V83.505c0-.942.787-1.727 1.731-1.727.945 0 1.732.785 1.732 1.727v46.405z" fill-rule="nonzero"></path>
                    <path d="M14.937 81.62a4.395 4.395 0 0 1-4.408 4.398 4.395 4.395 0 0 1-4.407-4.397 4.395 4.395 0 0 1 4.407-4.397 4.395 4.395 0 0 1 4.408 4.397zM158.023 73.887c.275-6.831.747-23.085.078-36.12-.905-16.999.512-39.416-61.075-37.531-61.665 1.452-59.029 23.79-58.99 40.79.04 13.035 1.418 29.249 2.047 36.04a449.46 449.46 0 0 0 117.94-3.18zM180.926 85.547c.944 3.73-1.456 7.616-5.43 8.52a382.094 382.094 0 0 1-151.744 4.122c-4.014-.707-6.65-4.398-5.903-8.206.748-3.808 4.486-6.242 8.303-5.575 48.483 8.48 98.185 7.106 146.156-3.965 3.817-.903 7.673 1.335 8.618 5.104zM132.837 151.739c-11.884 0-21.526-9.658-21.526-21.515 0-11.856 9.68-21.475 21.526-21.475 11.845 0 21.526 9.658 21.526 21.475.04 11.857-9.641 21.515-21.526 21.515zm0-35.687c-7.831 0-14.246 6.36-14.246 14.212 0 7.852 6.376 14.212 14.246 14.212s14.246-6.36 14.246-14.212c0-7.852-6.375-14.212-14.246-14.212zM156.409 124.846h7.32v69.372h-7.32z" fill-rule="nonzero"></path>
                </g>
            </svg>


        </div>

        <div class="flex justify-center mt-2">
            <div class="w-full max-w-sm mt-4">
                <div class="mt-2">
                    <router-view></router-view>
                    <loader></loader>
                </div>
              <p class="text-center text-grey text-xs">
                ©2018 <a href="https://lk-development.de">LK-Development</a>. All rights reserved.<br />
                <a href="https://github.com/LKDevelopment/forge-ohdear-sync">Source Code</a>
              </p>
            </div>
        </div>
    </div>
</template>

<script>

    import loader from './components/loader';

    export default {
        name: 'App',
        components: {
            loader
        }
    }
</script>

