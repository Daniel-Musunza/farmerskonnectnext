'use client'
import Link from "next/link";
import { useState } from "react";

import { Carousel } from '@mantine/carousel';
import { Card, Container, Image, Text, Title } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Slider from "react-slick";

const data = [
    {
        image: 'https://source.unsplash.com/random/800x600?farm',
        title: 'RELIABLE MARKET LINKAGES',
        description: 'Connecting farmers to stable and lucrative markets.',
    },
    {
        image: 'https://source.unsplash.com/random/800x600?agriculture',
        title: 'AGRONOMY KNOWLEDGE',
        description: 'Expert guidance tailored to your farm’s unique needs.',
    },
    {
        image: 'https://source.unsplash.com/random/800x600?sunflower',
        title: 'SEED',
        description: 'Creating a bridge between farmers and the seed value chain.',
    },
];

const CustomCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 10000,

        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="lg:mx-[10%] ">
            {/* Section Header */}
            <div className="text-center mb-8">
                <Title order={2} className="text-green-800">
                    WHAT WE OFFER
                </Title>
                <Text className="text-2xl font-semibold text-green-900">
                    OUR SOLUTIONS
                </Text>
                <Text className="mt-2 text-gray-600">
                    Our market-led crop diversification initiative builds resilient and
                    profitable farming communities through
                </Text>
            </div>

            {/* Carousel Section */}
            <Slider {...settings}>
                {data.map((item, index) => (
                    <Card
                        shadow="sm"
                        className="bg-green-600 text-white p-6 overflow-hidden"
                        style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}
                    >
                        <div className="relative">
                            <Image
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFRUXFhgYFxgVGRcbGBcXFxgXGBgYGBgaHSggGBolGxcVIjEiJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGyslICUtLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBFAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAD0QAAEDAwIDBgQEBQMDBQAAAAECESEAAzESQQRRYQUTInGBkTKhsfAGQsHRFCNS4fFicpIVFlMkM1SCov/EABsBAAMBAQEBAQAAAAAAAAAAAAECAwAEBQYH/8QAMhEAAgIBAwMCBAUDBQEAAAAAAAECEQMSITEEQVETIgWBkfAUMmFxocHR8RVCkrHhBv/aAAwDAQACEQMRAD8A9Xd7CujYGlrvBKSHIr3wUDWT2rZTXs4+tm3Ujhn0cKtHka6lNGu25q1tFd+rY4PTd0E4S2XimzwbnFG4O2KeQmuLJmd7Ho48SSM5HAjcUa3wieVPqRXEoqLytlVjSKWwwq6b1DuKakzealS1DN0M8fxemBn9KzeKSFNE1ZS3LmrOKrBaeCcvdyKI4QPXRaA2psmh3AGqmtsnoig3DocUzrakrK2ol69U3FtjqSSJdS5o1lEUqm7R0X2rSi+AxmuRtMVUqLxigG8+KXvdqW0fFcQnzUH9s1PQxtaNFSorL4m1NZXFfjOwCydS+ekMP/01ZvEfjUH4bU/61/RhVceOa7Ep5YNcm2UVzTXlLn4qvKdkoR6P9T+lI3e17ygdVxR/2nT9GrrtnDJps9upaU/EoDzIFJq7VsuB3iZeXgNzNeKXcJOZ61QKU5eP2/Sjua+x9BQoKDpII5guPcVNNeATcIZlEHLpJDnm4rY4T8TLS/fALGxTDMN+dFMDPSkVxqV7O7Wt3gNJOov4SJjJh2HrTpFMmICIqpFFIrhFNYGCaqtRSKqRTWKwbVKu1StYp7b+KYVn9ocQ451W0RpEvQLoryccEme3OToUIrgFEUmqxXYmcUm0M2LwFO27tZYNXTdNRnivgrDNXJpm9/eupvVn21EvLNWf2l25Z4cPeuBDuQMktySJNReOjoWSz0F1T1jdo9p8PbLXL9tJ3SVDVP8ApE/Kvnfb34zv31FNom1bGySNSnYuo+UaRE5NeYuWbjgggpIwYy+7sfMHlXP6tOkFuz7nwxtXLfeoWlSJ8QMRlztVklMspJbLEFvPlXwpXGrTpDgW1NgnS7S4LOcTVbHaC03FaVFOoMWcEhWXZixGR0p1ll4FbR9hT+JOEL/z0sN505aCzEdRTljibdxJVbuJUkZKSCB58q+KXbsMIk5lmLb89nq9q4Qki2SAWBHwgF2OZO1GOeXgV7o+z2uIQr4FpVD+FQMc42oPFcfaR8dxI6PPsJr44i8dj4sagSAeYbcPTvZnGF/EXSYcflI/Wqx6jemiUsbZ7/i/xTbTFtJUdnZKf3rMu/ie+XbQkdA7dZNZVhWrZxsRPnRCjYj1aPlFdqSOdE4jj79z41rIxmJPIRS4tHy9qNpAz8z++fnirhAy+eRogFe75fMH+1EWwgsMc6Z7scvMGB1zU7uMAZ5+4NCzULd3HPrMV3S/y/zRygE59a4oPmW6elazaQAHl7V3Q31jFEIaufbdaJqBH/P29CuWyRFHy2Y5P8xVLucAdHHr5GiBiwgvqblIDHO009wnbd62NKVhQhgqWA5PilFMdPi3238zVzZLAsN/OI9RWYtWbvB/irxBN5GkMAVJJMxLNjOHrV/6zw5Ld8h3Iy2PPFeEWzgMz7B35nzod1DwZBw+Wopis+hWuPtK+G7bPkpP70evmB4f089j9aH4hBcNt+1OhGfU9NSvlqeMu7KX/wAlV2jRqPtoG4riudGs3rRKRrS6laQAXdTO0VOM4qylaberxKgAOdnkgMMb15HrwTq0ezodCzOWG9dXwagQGd6Suds27a1Mm4ooDjShSgo/0ggM/wApqqvxuwBHB3ydTShQcNl5GYaml1MV+WS+qI+mn+Y9L2d2OM3M8uVU4zs9KVMEkv6VgXvxzdYdzwV4q37wEDGzDnz2HWFO0Pxbx1y2q2OEUkqt6dYSpwSwUR0bUw2ia5fxHutzj/yX9y1QSpJ/QB+Me1TwdsL0Opa9CAcCCrUf6mAxXyLtDtJV0quFfi1KKn0y7uwGOWa9X+Jey+0b1qzbSi6U29SQkOlgsMeQMOPItgmvMWfwrx2lQ/hLxdvygYL759KTN1eFvfJH6o0YOtkzPt3HuOcFPzAaeYcU5w3aQI0wAHIJDAESCT1LCjp/C3GkAJ4S8CHykBnbc+vyrn/ZXHvHCrbzQPqqpvq+m7zj9UP6c/BnWLzwplAEHSd2ff1ptVxFzTlwTln0tgF/uaasfgrj/wD4q+vitg+jroyvwnxyFD/01wlnBdJYh/6T5UV1vTPjJH6oR4p+GZdzikrSQxBTKeeZBOd6nfApDRkl8kw059fOtMfgXtAz/DmTuu0Ifca4pj/tXjkpIVwjs+FWjDuICiVZOKC6/pbpZI/VG9GfhmFw98JcqeBnLk86b/iCEh4D+4l2Hr1pa92dfQBrtrS8sUmDMFxB6edBs21uToVGHSf2rremSJ7rk9b2BfUdSQPCBq3xjbeXrXNuD4gXZvC0dSYPyrD7GRdPhSNCQQpbgzIcB94A6V6QnfT749t966ME0o0SyR3AKQw2zGQOe4Y+dDuWmkwDsUiD5tTPign/ABVFJcyG5sM1dZF5QmlC/dp3Hin23ZoFEu6dgQ3sauEez8mrndhhExn13NZ5I92BRBhWIj1qxSFCPmf2xUIAMA9cbdWqAbtpD9f0Fb1I+TUwCtQyH6hvoC/vVCGzjAhvlmm7kyM9evrFCUlXLn5fP9KKyx8oVxaBBIZgpL5AIGByoawoFwW2OPk0g9Ka7vzH35VVSYDgfpBo+rDyg6GxK6sE6CQX5FiTnHpVbttpVkYZ4HIttgUj3BVxK1J+ENmBI2LQHitbS/Ld5pceZO7aBLGxYp/pZwZcQev3yod0ARp8JYlgfsU4pIKcYYvkjlIwIoJSrr7Kb7an9WHkVwl4Fb4gnbGfn7ZeuXg+ljtzxiPamVIOyVNgMk/X2oH8OpsLZstW9aHkX0peGBKyIdPrUo3crEaV+x/apQ9fGHTLwfXq4Vtk1cpHOomyOtfhmryz64EVqOPvz5Ve2hsyfvFFCRXWHOg59kYqBVTV451NPKlswJamFLhypvVRG3JI6/fKmu4JZ2fny8qujh2EVRTUV+oAShXEBx/ajG2eVWTapNWwQOmsvtBanusRFsZJDPqfAzFbQt1lcbYdN0tJIAw7hIH1NX6aS1b/AHuLIetIgDpVFrAWA4wcx89qaQg0DibUgxHOpRktW4zPMcalrhBUDtlyXALvvANL6qL+KuESCLjEAlnTGCdg0s9Z/C3kqSNJdonPr1r7nDP1emhkXimeJ1WNqQyVVU/SK4TXdP8AejZxla6ma4U7VwU1gOlNWzVajGjqMcI+4+3qVcl9v7UMjaiY5qmrPVCKgNCzFjVatUNGwgzVPU1c1w1tTRrBKfm9UKvv96MTVVNR9RhtgVh+vnQTaGNIbk36UwoVxQreo/IVKXkClA6j1NSrB6lH1p+RvUl5Po5W1Ut3yTggczSaLeFLM+cCPnR02nIJJDS37/tXwjhFH0VjNtT86KPOqAdat6+1RYS4bpVwaEHrs0lBCuKgT50MfeagXQowWu1TU2aj9aFGO3FsJLUnfWRbPMuw6nA+lc7Wv6Qh2Y3EjlvQ+Nvae7VDaw78iFAfNq6MWN7Pz/QVs0kYD5rpqttbiiPXM+Rha9bC0kKAIOQcV4TtXgO4vPbA0KksXHtzcmveLsgFwIJlqz+O7JBSrSWJGZJB969n4T1y6fJ737X2IZ8WtHlOGu60g+45FyG9waMRWbds3eGKnSSZKkneILnmwp6zd1B+fKvqssEvfH8r4PFyY3Bl9P3vXForpVUUqpWyWxQJ5V0CrFXP3rhVW1M1FdNRqsfv+9QGipsFFSKrp6UTV51K2o1AtFc0mjg9a4T5UdQdIBulVI6Uw9VNbUagBT0qpTRyBQ1jk1GzUBUmqlNXJ6VwnlWswLT0qVfTUomPZ27RKpEZHXzHnTdu31k1VCk8zVhdTziviZNs+kSLBL70QA1VNwc66Lg51J2EIRVbYNdChzroUMOPlSmO6TzriEn7/wA1Yj7irChZirmrTUS52rurm1KEx+2uKSFWwQ73EsOZn9RXO21A2TqgApJz+VaS1X7UsC4u1A8KwomNgY+dW7UtC5bKAzlo9Qf0rvg4r0/5+pOnuP8ADrcBhFHelrN5IGf70YcSnnXFOLvZFEWeke0eJCUy+Q2mT9KaPFJ50nxY1EFPs5A649eVPhj7vcgSutjz3biRcZaUnDSxEEsC9YPBnuvCrClMG5lya+g6ElGg6mIYycetYN/8OJOFsAQQwAZi4eZn9a+n6H4rhWL0smyXHLOLL08pfMzCamrlWrb7AYN3m525kn9ev6VYdhgCbg9E+7zVH8Q6Zf7v4ZxPo8t8GSB9vUf7Na6uw0/+Q+396t/0ZH/kPqI36+Xzof6j0/n+Gb8Hl8GMK4TLe/370XtDs26ltDKTqEgyA4BBczlRccqStcPetFSrqSoBoDKJA7oKYDyX7114Z4svEkL+GmuUMD3qE0nwXEMgBUFLpILPBIggsRFUv9qpThKleQLdfZp8xXT+GyXSVknildUP6qHavhWpvyqKS/MAH1zVbHEhQj2pO3f0i48PdUA4y6UhhzmlWFq9SAodmaAvAtL6g4bcRI9xVXZqw+zOMS3CuQALSgonb4U58waqjtFKUWUhTmSAOQUqCKq8Pgt6O9G4tfMf3oalCvKXvxGtZDJOpwyE/E4c6myBE0jY7Tud2LhOkhMKcyVrIZKXckDccqK6WTVh/D7bs9waCq2NqU7D4zWAFk6yH8XJ8dDitRSK5nGnRCcXF0Knz+dSjaalahaPSW+PBLA4ypizeeCfpRFXgly+rdiWLdOdeItcbcWNFuVqC2yQdLnwnmzBkzIoieKvBIWoR8JDknY7QxcZ/qavNfwvflHqrqv0PQ3+30oOknxRHm0kmBNTh/xCFYB5eTgkYmvNDsq4qSlQJXoSSFE+FJLEEOCdRGWhw7To8H2OtP8AMKFakulNvTz3STJ3fwvAPnTJ0HSxhercWOfK5cbHpEceCD4pcgp3cUwjiBAB+/Os3g+xdKAbjEvkvD8w0OlwoNLTvReIvAa/9rukOQWDbbOW3ivJlhxt1Dc6lJ1bNHvuokkZ8qWV2gJGrGX82BbNB4bsy4Vk3FMNQ0fN5PQDmDT1jsW0kOQ5ByZJZ4+ZqUo4Yfmd/sMnJgTfuFI0qHVj7bwKiHglQJ89+h83HpTR7LALgvIfkzN9+voFfZYcMSogvJhxLkREnpilUsb/AMB3Ig7AvvzMvPlAqnflJCfMzvBLedZ97hCCzqIUoJENuAxLb6XB86Z7O4U6E6XWHJ8ZGqYlmgB4qssUYrU2BSd0NKvkZYF/2PPrVgovt+w6U1/DjDDTsfIY9m+xUVYiRiPauXVEoBBMvnY+7OKslPP9aILBxuJGfrRFWSA5D88O2KRyQRZKx9Perk8vsfYNFVZIdp5bP5vXe63G9BtGF03AQ45+/wBmoVDoPrRO6Y7j6ZzFTuiJc8jj3+dHYxTQ8fT9PveqKtpYfZ+8xRAjfDR7tUCSC8z/AMd4+Ro2YCeHGWMfOc/fKujhBzj99qKkgQZx8/8AFWPQSMCcfvijqkCkZN/8PWl4LHmAYcu7YrOX+GlpA0reJgB/LlPnXpUKd325cmrh2bMMDD16HT/FeswbRnt+u4jxwfY8VxXZ11CSOSdStOGcgJCjk9Nqy03NYACjrhQjxANlzBcekivoxvjUUkTu/LBk58qSu2kJYGymSCyUbmHcCDA+le1g/wDo8tVlhf7EJYF2Z8xucKrh1IY6QAoJYFwc6C8QDucD3PY7FtlOokKW5JkhIBw6QxMkh3aT5D6Jf7MQqO7cNsWkb80Ln4h4qxO0Pw4dWpDNLJJZJOsvOdIH7ziu7pPjHTZJe9V/0aWJo8Nc7PQhYAuK1o1sokpCVGVatL88x9KUVYvhWm2slDCdWHATpS5gHZhyy1exu9nqVcP8hTuQSlJ8RBCX1EYcGHGAX3oCLSUEoKEpGXLAAAkDBkOBv9K9WOjJ+SSJNeUef7MVxAuBJRatw5Dhy/MFRId9xXrU3QIJHoT9T+tZi+EUVKUlzqILAiGAEk//AFOwxikuN4si4EkHxE/CISUtqcAktKZHOuDqenm5cHPmg3weh79sMfM12sJNtX29SuTQzm0s9hb4C0m6FaEyV4TKVaiXGl9RMj1A506rhSpKgh4BeEp/pBCRs4CGEtnpWEVXlKZCdYhwyHS5SSyX/wBpCiYbMgVrcFYUlYUpwWMagVKYtkRDQ7EjNebmjKKvXvR6MHe1GpZ4NLqKi5OyYA8LTzJDnNNo8PhKiVNtDSGYH69KyOLBRqIUxDEsqdAUX1N8RCQ8TjLSlxfbWi4lOsMHcw8FLDMulzPSvPXTZc72dl3kjDk2ON7TFlkKJCv6o8TBjiBMe1I9lXws95cJyEpRkOIKkwMnYvn24GvdGXOoiQQymSkuD4manbVi24SWJfwjMpCcYdwA/NvOqaMeLHpaeruC5SlfYbtcagmCdics5wAd8c4FdSWfStlapBmeXTbagIKEkJB0gsdLqyqQQ5y8NkVe1fSZ+LUWBLBoVBbBifeK4XjXay1+Rm2QARIaZeN8nIPlsapeuq56Ts6XjMTyHOpZvDI3yIPQknLMRnlQu8RqKZIZ2LkJwYDeXvSKO9tGb2MxXbadakuPCWdQADkGdzpI36jatS3cLBSgXLuQ4yQI55HvFIW7tsgJuJGpAKG0YBZmY+H4RApi3xVv8zMS6QJlIZgNti20cq6ssYtJRi/vwTi3e7HLd9iWLNBBxGRH1nNEF0ndg2GnlJG9AsrSzEgljkwRO5M486ZCwWI5ZJj/AC4PvXHNb8FkX7w745ehqq7ulg4O2d2y9dfqCwEH1n612DBI2aBkdG86jS7jHU3Ceh9wfv8ASrhU5Zz+n+aHbZ4Mnk2Tn0jfaogtsUs8P6Fm2oNIwQrnyP3vQV3W2zjkenyq5Mg4YbHr/nNQgNM8zz6tzzWSSMJ3+JYyCzEzzAfbyrqrgIKgCOYDuBn4fPlNF4hAYE8p8p95roEuTnrjl9arcaWwu4peuLDFKYLSrYBwXkl+v2Q3ONUBhgAWUxY5LOQzMK0ipOCchuR3nlQFsRpIMvzwQ+zR061WE4vmIrT7MFY41BdWd8ghmctsd/ajjtBBYCXwYc5f6e1YPGcEtVzxFtJJZIcrRyUpw+GZvXBpLhkAgkXNLyQACEhLkaQS8kCDmuxdFjnG0yTyyi6o9V/FhwwzyzuHnyq2su2DloxuOTuDvWBq0BJ1/EDqI1DfTA823Gcc9DhVOkEuUvDkg7nBziOdRydNoVoeOSxxXE+IpYvy2Yu0z86XvXDq0JYGColsHJG3P0o0FQYAkQ7MRgsGdh61Vd1JLCVAuJiYc82ioxpPgdi96/lU+EcwygWDTu20GkuK4UXEkAJUACdJJSRCpJhi6sEmtBfD/EpJ0qD6il5dmL7yOVVAdH5SdA2LOcQ27QG2rrw53ialARxvk8PxFlUJA1Eu7uE3AGAUEsJd4LH3FI9qcEL6WKjAdKoSoTy3UQSC1e/s+JHiLwQdJYpbLKT10+w6Nh9odkW2KrbrKkslJhPhDagByVLc/avqOn+OLI9E40/Pb/wm8ao8twnF3k20AWABpDAkwNmJSokM2T+5ld4guWLKYM7QG2ToUzfMY2qV6vrLyR9vg9PwnFaVL0ZYr8JOlmDgghjIPXLvmjWONtqtHuydSQ5JK9DJ3IdpfkM1k37KQgl0JRI8OSn+ZKUqBO4TpemeHtKuWe7SgC6qFpUSlksSzy0pJaN5ivnZ4oyWv9fuySm06NS7eUhiTq1DxiYTpcmJJkk7MnpOBataL5UkLZR0anQ2rxOwUQoRDAH82DFPWuFu6kOpagsaSdUgG2VADS5WHA2DDeCz6ezAQlK1jI8I0uRgeIsoFjhgx55poTx9Ot2rfgzjLIZvF3e4td4V/lBKioMFvp0kJECR7nbAex+PWu4pRBUQANQcJ1nVpa4C0aYZ5VLsK9Lw/ZwBDajpBKScJy8gMVQR7tk0WzwNpBSt1KJU5JWIWQfEACwxtneuWfV49LTVtlVildinCdoaUORv4UqJd5+Elg4Dggn3eS3e0NSdKU6lNJGE6iCSegBJL8xvWpwt5K0hUeJMqDZDsefKY2NAHA27R1gJYlUsBC5b/UPN96815sbbuNMvpkuGZaL+i4lenWCV6QlJch1SmZT8DOR8Xto8PaWtBCmBZ9RGdKz+X8vhP1G1P2rQSVKA0qVJUPzMN2Jj964q651IZQIZWnJkGfSKTJ1Ck/avmNHG1yxbjuyE3BpUojmwTuf0LCJjnQrXZh06EohKiEEqVyB1Mc8v8vWiAnPxhL5JO7uWg7EAijJuqSWWQQQ7iMvnrHtUPxORKkxtEW7F+HsBKdOmAPzByoHIMNMfeGTwyQGiJDBgCYf7/wAECxIcvgt15D1HvQn3YzAeW2lp3+3rmcpSdlKSLMBlzIjZgNx/beouxIILJywwWnyqiL2AokOD5ltJg7s79KItRbltLcww+tBp2YlsRgB3xh8/v71ZaQH3LS5OKDbuFSSoyHOSRgn+w/aobg3JBf3nLjYPL4oaXYQvdDLSS43mP2+tWFuT1Hps+KgUHY7DZ/vnUSonUOhHnAMj150jsxS5w8FiROTtj+1UHDF3LBmwPPHL50Za3YiebdfOrP7R9BuaOqSRqQhxVhWoEAKYAM7EdZhm88Urd4O7lxPICZDzLBhy/tqKuQxBxgtMmR1qBRkE823LPjzq0M0orhCuKZ4bt+/cQg3yCUB/CwGd9WVQmXDOGxjF7M7RJZKkKGlDKCklsEqMCDImDPv9OvWAp0qSFCPZpjbPsazuP7GtL8KkoyCklIUfCzgmC35c4r2em+JYoxUZR/wcuXppN2mYHZbG25yNMFh4Ul3BO8k4aOsGs8Um4DpjUzjVpmAHchwR+lOcV+HkFu7UyZ1JVqLv4glwHb751l8bwa0cTZLkICXBSguljuwOoTM7TVFkxZm9L35oTTOHJv2lnS35iElISSQziAPXPQUQ29QLynVs7lJ5xOWis7gF63VrWnDpAAKVOXAOwlQZvdqe4bihpgOCr1dzLMJ6ftXn5cbi9jpjJMPbuPGkBz4Q/QO4P06jzpZbudKdR1BLGCwBYzkbDzpiwsgqTpYBRO0gkyOuIM0YLcAjl5bmXH3NQvS+CnJj8Zxmk6AZIDf6Q6QRtpjY7nyoN7hgu2bdpwkukgKGmQGdUk7Bp8q1VAKSzAlIbLlssHn3espfFlIBUgZKgHAUpvFJ3EP5Ecq68crXtW6JyXkQXw920SkWBdBJIICIBJ8Pw8wfepTtvtgASUg7uFSebiD5zUrr1Ze8Sft8i6eHSbbLBVbUw/J4T8Kx4gGJJMB8U6rgLdpBWhwdLg6irxIYsCXUnZj1ETSQ4UW0JIKiUAjWnw4PhJZ3SA/wwAfOrG8soWBdSSySFKTp+NTKSHko6GqScpP2va9ySSS3W4/Z4tOhy+pShI1DxMWCZc9JPtVuCvAEoJFwKS+oxl2BBjzjf0rE4BAFzuVkjASpLfEpyXJfm0Ej6UxedSABpQpNwIdbnS2qARkOCGIjIqeTAravn7Q0Z7GoO0AWcAJUoFIdLkwDqEkbcjA50pxnGqcp1EAhGknxaZaQDlSZZvrTHEXFMUp0n+YlxpGlQh8iSlRDz+tUvWlqu/D/ACylBKQdLFykqZJI8L6i0wkztGEYRdtffzHdvYJxPGAFKdYA1NqQIDANPM6knSOW005a4lJEkF1MxYhxvPwnI6kGh3+z03GCjp0MwASQShUBzJS7gDkSDQu8CVKKnBiNIAI5kCWLgE7aR51FqEltyOrT34HLCgdSG3Vp8Lw5Bg/FLDbn5G4JaTILDBAGkRnw9efn6pHs9SiChRAKlFLkaVeEMtnzn39nbKQkaviDgqcl3di3lzdmHpXPkUa2Y6sNbSCXCSNiFfoR8JdveuHhUkLDEOGIdnn2irJRuXBgEgwZZ3++W1EXbwqQpw7Puc/Q+1c2pp7Mehe3dLkB/wCkbyI65cHyo/D6pdIIfGH2LAjoasSJdiQncTAGWn/NcsKJQ6RJc+c56vz61pO1wYGbSSU/lU4PnGDE5+VFTZAJyowWLMC7P9vVU6i0+2A7ks8n8uP7V1RcjSfMQ/MDnmg74sxxVvSSA4BaNnL4IFGSo7AAuY/UiJoN1ICXGXgEiSfyyWn7600nSdSQSl3MAtBknGedCrRgilj827iOWJfoHq4Vz5sH+RHSl7SwCQYVJAKgXDZfnOevnXbfEn01f6fZveelFwfY1hdbHTqyCz4OPuKFxCAzHc8jEPmIcM3Wqi8VLUAB4ZBZwzE8pzRe8C0gRIkEzHMH0fzraXFpmsHeBjSJ+Q9Sd/WqJuvqSJ8TEbD5PDbGr8MVeLUNIBLS8OS/LAHtQgs69JHgliCXJbLgdH9KdR5XgB1dw6XCQSY07wXM+UvQ1XpLEiSvrpS4YB9wzdHotwJUpSA4J+IOATD6hzaJHN6DbtaVOdjpTJMbgh8Zbzp41RmWvhiCQ0s4JwDyZuu21CuyxSoB/DqEqIeQ3Nm5+TPUUgoA0sGZ3B1ZdvWBVOISNTpdKmjSWBDJcnmQw+81guBGebupXbuJTpChqfvGk6iydZGJbLuQdjB7F9KVrKVAkwxUFK8KmJU/kAz5p/tRKFWyVlCk6QWcpJY8wcgeQ8hXnuN4Va0JX3DpB+JJJUbaSUyMDcl5g16+Kssfdt2OaVxex6AcfqJAHhRplbuyn0kuU/p+xbSlamNyNIALS5Cm1Db6vXk7KtKzaCVk6ik4JILOSkAAiCMyBW2jiwCVFwpAZQAIGsEkFSSHDtpYO/zqWbpdP5R4ZL5NawtRggHABjUA0EHkS7Tv1pLjklWpSQdSBACXBSo+KAIUwfnAqli6dOsEgynSVAiZSfqzxHvXg1qTpJClKI1KCXIBlgAcRqBeRoG1QjjcW2h201RpcFwACAEpCByUoEzLv61yszjeAuuBa1aAkANraP8AbUrenKW+tffzDaXYVQrv1qAuBAQVd5bJcFIB1BJBIUJ3ETIot7gRp1arZCtAISkBiBsSohJcqD4maW4xSQhC0k+MD/3G+FTFK0kCctpJ/Kp4euJ7RWUq1hm0s7yG+JIDABWo+imArvUJOnDg5m1xI1RwXD6dOgJLJ0BLutpZ/EerA9WzXU2gQtASo3DBdILhWrxEFgYILiXVL1lcOi9eBuAK0hJcKASCx+EB36EkhsbCt+0oLSm58Sk+F8aFeIKGOp543rly6sfe/wC5WNSXB1XZ40pC1l0gGTB041AjUQTDPuaJaCSYlYZwU5QP6f3cyfKkl8W4RBWlQ0qBIJGoAJiIhxyb2gT8JYlJR+ZRCwksADJf06CHBEHGTXuZTZcGkFqXKUpBY/FDmCSUiWdg/NzS3EJSpWvSRcTAWJfLwQy/ibyaatcR3gQpKgAW8KXeGKg7QYTPnyqvCoSCp1zqAgQSxZiBAaOjZqcVp3XIXuafC2yEgQyRuASAAzjmGhvrVlL8RYMpQl2ztPMj3jpQrS1FgysEuIiH8pYtyPnS9riiVEMCHKczyljp2aeVcuhttlLo0rUMzyHgkj5/QN5V20dUkENEGQG3LxtypZNwuUl2zsSksOfTEv8ApaxcLHW4YkAl9oKgDgNLGpuDDYZKRqG8noQ8GP16cqnes4/MOhGYcn3pdwyVJGkMPXfB/wAueVEU5kKeBuQ3pzrOPkxayheolwEmWE9CX9ue9dWC4IYYMTId8CPy7VS2oMQzAkh4hw5P096pd4gAiQTpcbO4IyDDsPccq1Nsw13ZYw77MwM56elAKWfWWBS0AHLDDMwDD3iilcDSWLEzg7yRt+21CN0yQGkiCHOAlTGAD4sdKWNmIqwNOlZeNLn+nYZlwOh+tD4sgIEgMpI8MKDkFsM4LGrXbZW35SlQzhTpwT7edWN5AMkOWcETOB5+ZiKdN/uAHbWl1DDETglxO/LeikkgEqGQzuHh+rHp+1DJHiKSzeHDY6wQzVE3XUUhzAgv057N9fdmr4MRdvSCpReCYwRBmPigYrvCyNBSzNhsGSRzGPdqtaIYgjdjjO0Bmmhpuh3wzw+yY3fct50N2qMUuKOVRsNWkM5LHnkJjr50clJhnadmfn5yGfz2oCkQAQCQckwJDbkmCd+WZqqEqS48MgBiXlgMTGWdqZxTRit8DSSSB4FEKchMkBII2OA5y9I2EF06lMgCDGlR0t/xYJL52enCsNzSVMRyDJhPyPvQLNhIT4fER4SBAIYuQ+7yI2866IOosRrcBwqEqJT4SPEW0gHJICSCyjkPnMh6B2qgsbfdKI0pL25UyfJ9JILTkTOKeQlIT3iWPhDAuHAO6ic4h8xvR7NxwggyoloYEt9Z/aq+rpepbr+ounajC4HgyWvKud3/AC9ABSEt8QIMuX1QY+EZah8ZwOtlIUbWsORLjwkbElmAIDBmAiH1VcN41LWx1EpbSwhuZ0lUDxAQ3R6J/CsQUgphykflKW2JMfJtpq76je7+/AujajOscGu0lQtKdYJOtRgpgmJlmfOCYc0O5f1Lt6ljxB0LOpMkAs2s6kkt6mjcRxqe7KgNSjqEgKg+EFnAy2MgDd6UXwVxbEwEEq7u8AAogNBTli7Fhs708d/dPYVutkO3O3CglK0OoGTKX5kAEOHeWqVe2pB+K0C0JYk+HIlIL5OZqUmnF3g/qG5eQSrOvvLSjrYBK9TB3ZvhGDq5HPSsxfZpBRZVd8ThaSAXdWAGiXMnGa7UqmLLKLpeL/gEop8jnCKSq2zvpVpWTIJOoBgUjdhOxNW424fAUpJB06F6vjZTkNBcafzMIAnNSpRiry0/IOIHTwhm4WSTkhyPAXJIyT4W2zk0/wAChPdkaTo8RDl0g/mABct8Sp39KlSubJJtfMpHkpdsLtlCtIwAW0SVKGlgzBzuz4xtW/wyu/QQrwpSCoGVQWDmQpz7bNmuVKmpuk/3GodTcASZwTMlm2mdvpmuJHejUxDgS+CFY0wG25b1KlTe0bH5Lq4dXiUkyz4Z2ZyczHPbei29ITnSolmLkElj5Z9pqVKjqcuQooouNIBECY/LgARM/OmrKmjeQHyGLHxDq/2alStJdgrkWWsKDjUFPpKvTkS7GN6Oq6xSksSQwd3GYfyBG1SpRaXAEcQAhwSdIyCxy+C2RRLygC+ozhx01PUqVOraGOfxRcJAzq1cmHIPE0PiiJWSwSCSA/iBlIc4b9alSmUUppIDJwsoOoBiQQMhnbpHnVL5a5hlLTsXSwVuDzJ+dSpRX52v3B2AXr/8t4BIfDul2Y7P8U/5q6U6EFSiVNqlRxzxj5wOtSpVGtvmL3LklQYxIJdiSHxGzgUmpb3DBUB4SmBBUU/LTEYNdqUYctGY0AopUAlJMtq2IAMtvO3Sk+GASf6SHLiXBIUY2E+eKlSjB3aM+SqraypWpYKSQGDsSZEHIOoOSejGhXUuUJtFgJkEcwlPhI3BMR7TKlWhJiNFb3EPptE/G4ALmDqz6znaiW1KUNJXpGCRqZ1OAA5cO3X0xUqU8kktv3/kC5A3r1tGkKS4TqSpsEBKQSRv8P060n2zfJuW7aSGKXAx4SAQkli48ILFxNSpXRigrT/RkpS2+YX+ItW2Fy0Ne+4BBIISQR4XBapUqUNCe41n/9k="
                                alt={item.title}
                                className="rounded-t-lg object-cover h-48 w-full"
                            />
                        </div>
                        <Title order={3} className="mt-4 mb-2 font-bold text-white">
                            {index + 1}. {item.title}
                        </Title>
                        <Text className="text-white text-sm">{item.description}</Text>
                    </Card>
                ))}
            </Slider>
        </div>
    );
};


export default function Shell() {
    return (
        // <Container>
        <CustomCarousel />
        // </Container>
    );
}
