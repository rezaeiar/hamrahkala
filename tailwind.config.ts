import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                general: {
                    100: '#131523',
                    90: '#333752',
                    80: '#5A607F',
                    70: '#7E84A3',
                    60: '#A1A7C4',
                    50: '#D7DBEC',
                    40: '#E6E9F4',
                    30: '#F5F6FA',
                },
                primary: {
                    100: '#1E5EFF',
                    90: '#336DFF',
                    80: '#4F81FF',
                    70: '#608DFF',
                    60: '#89ABFF',
                    50: '#B6CBFF',
                    40: '#D9E4FF',
                    30: '#ECF2FF',
                },
                secondary: '#1c39bb',
                red: {
                    101: '#F0142F',
                    90: '#F12B43',
                    80: '#F34359',
                    70: '#F45A6D',
                    60: '#F8919D',
                    51: '#FAB3BC',
                    40: '#FCD5D9',
                    30: '#FDE7EA',
                },
                green: {
                    101: '#06A561',
                    90: '#1FD286',
                    80: '#25E191',
                    70: '#48E9A5',
                    60: '#74EFB9',
                    51: '#95F6CC',
                    40: '#C4F8E2',
                    30: '#DAF9EC',
                },
                yellow: {
                    101: '#F99600',
                    90: '#FFC700',
                    80: '#FFD613',
                    70: '#FFE45F',
                    60: '#FFE582',
                    51: '#FFECA3',
                    40: '#FFF4C9',
                    30: '#FFF9E1',
                },
            },
            fontFamily: {
                'nunitosans-regular': 'NunitoSans-Regular',
                'nunitosans-semiBold': 'NunitoSans-SemiBold',
                'nunitosans-bold': 'NunitoSans-Bold',
                'nunitosans-extrabold': 'NunitoSans-ExtraBold',
                'iransans-regular': 'IRANSans-Regular',
                'iransans-semiBold': 'IRANSans-SemiBold',
                'iransans-bold': 'IRANSans-Bold',
                'iransans-extrabold': 'IRANSans-ExtraBold',
            },
        },
        container: {
            center: true
        }
    },
    plugins: [],
};
export default config;
