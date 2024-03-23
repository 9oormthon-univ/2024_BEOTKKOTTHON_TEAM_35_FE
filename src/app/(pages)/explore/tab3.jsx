"use client";


import { useState, useEffect } from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import "./RangeSliderStyle.css";

import SelectLocation from "@/app/_components/common/Explore/SelectLocation";
import SelectAcademic from "@/app/_components/common/Explore/SelectAcademic";
import RecommendCardFour from "@/app/_components/common/RecommendCardFour";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { financialProduct } from "@/app/_state/products";

export default function Tab3() {
    const getData = useRecoilValue(financialProduct);

    console.log(typeof getData)
    // getData.length != 0 && getData.sort(() => Math.random() - 0.5);

    const [age, setAge] = useState([18, 34]);
    const [location, setLocation] = useState();
    const [academic, setAcademic] = useState();
    const [isHired, setIsHired] = useState();
    const [selected, setSelected] = useState(1);

    const [card, setCard] = useState();

    const [sortBy, setSortBy] = useState(true);
    const [sortByClicked, setSortByClicked] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const [selectedAge, setSelectedAge] = useState([18, 34]);
    const [selectedLocation, setSelectedLocation] = useState([true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const [selectedAcademic, setSelectedAcademic] = useState([true, false, false, false, false, false, false, false, false, false]);
    const [selectedHired, setSelectedHired] = useState([true, false, false, false, false, false, false, false, false, false]);

    const checkLocation = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    const checkAcademic = [true, false, false, false, false, false, false, false, false, false];
    const checkHired = [true, false, false, false, false, false, false, false, false, false];

    const compareArrays = (a, b) => {
        return !(JSON.stringify(a) === JSON.stringify(b));
    };





    return (
        <div class="w-full pb-14">

            {/* Filter */}
            {/* <div class="flex flex-row overflow-auto pt-5 px-4 gap-x-[8px]"> */}
            <div class="flex flex-row overflow-auto pt-4 px-4 gap-x-[8px]">
                <div onClick={() => { setShowModal(true); setSelected(1); }} class={`flex flex-row justify-between items-center h-[30px] px-[15px] bg-[#ECF3FF] border border-[#2528AE] rounded-[20px]`}>
                    <p class={`text-[#2528AE] min-w-max text-xs`}>나이</p>
                    <Image
                        src="/assets/images/b/explore/images/explore_filter_down.svg"
                        width={12}
                        height={12}
                        class="ml-[11px]"
                        alt="FilterDown"
                    />
                </div>

                <div onClick={() => { setShowModal(true); setSelected(2); }} class={`flex flex-row justify-between items-center h-[30px] px-[15px] ${compareArrays(selectedLocation, checkLocation) ? "bg-[#ECF3FF] border border-[#2528AE]" : "bg-[#F7F8F9]"} rounded-[20px]`}>
                    <p class={`${compareArrays(selectedLocation, checkLocation) ? "text-[#2528AE]" : "text-[#454C53]"} min-w-max text-xs`}>활동지역</p>
                    <Image
                        src="/assets/images/b/explore/images/explore_filter_down.svg"
                        width={12}
                        height={12}
                        class="ml-[11px]"
                        alt="FilterDown"
                    />
                </div>

                <div onClick={() => { setShowModal(true); setSelected(3); }} class={`flex flex-row justify-between items-center h-[30px] px-[15px] ${compareArrays(selectedAcademic, checkAcademic) ? "bg-[#ECF3FF] border border-[#2528AE]" : "bg-[#F7F8F9]"} rounded-[20px]`}>
                    <p class={`${compareArrays(selectedAcademic, checkAcademic) ? "text-[#2528AE]" : "text-[#454C53]"} min-w-max text-xs`}>학력</p>
                    <Image
                        src="/assets/images/b/explore/images/explore_filter_down.svg"
                        width={12}
                        height={12}
                        class="ml-[11px]"
                        alt="FilterDown"
                    />
                </div>

                <div onClick={() => { setShowModal(true); setSelected(4); }} class={`flex flex-row justify-between items-center h-[30px] px-[15px] ${compareArrays(selectedHired, checkHired) ? "bg-[#ECF3FF] border border-[#2528AE]" : "bg-[#F7F8F9]"} rounded-[20px]`}>
                    <p class={`${compareArrays(selectedHired, checkHired) ? "text-[#2528AE]" : "text-[#454C53]"} min-w-max text-xs`}>취업상태</p>
                    <Image
                        src="/assets/images/b/explore/images/explore_filter_down.svg"
                        width={12}
                        height={12}
                        class="ml-[11px]"
                        alt="FilterDown"
                    />
                </div>
            </div>


            {/* Result & Filter 2 */}
            <div class="flex flex-row relative justify-between items-start pl-4 pr-[7px]">
                <p class="mt-5 text-[#454C53] text-xs">검색 결과 {card_data.length} 건</p>

                <div
                    onClick={() => setSortByClicked(!sortByClicked)}
                    class={`z-10 absolute right-[7px] bg-[#ffffff] mt-[13px] pt-[5px] pl-[6px] pr-[7px] pb-[7px] border ${sortByClicked ? "border-[#E8EBED]" : "border-[transparent]"}`}>
                    <div class="flex items-center">
                        <p class="text-[#020D19] text-xs">{sortBy ? "최신순" : "추천순"}</p>
                        <Image
                            src={`${sortByClicked ? "/assets/images/b/explore/images/explore_filter_up.svg" : "/assets/images/b/explore/images/explore_filter_down.svg"}`}
                            width={12}
                            height={12}
                            class="ml-2"
                            alt="FilterUp"
                        />
                    </div>
                    <div onClick={() => setSortBy(!sortBy)} class={`flex items-center mt-2.5 ${sortByClicked ? "block" : "hidden"}`}>
                        <p class="text-[#C9CDD2] text-xs">{sortBy ? "추천순" : "최신순"}</p>
                    </div>
                </div>
            </div>


            {/* Result Card */}
            <div class="flex flex-col mt-[24px] px-4 gap-y-2">
                {
                    card_data.sort(() => Math.random() - 0.5).map((data, index) => (
                        <RecommendCardFour
                            key={index}
                            data={data}
                            onClick={() => {
                                setShowModal2(true);
                                setCard(data);
                            }}
                        />
                    ))
                }
            </div>


            {showModal ?
                <div class="w-full max-w-[500px] h-screen bg-[#020D1980] bg-opacity-50 fixed top-0 z-40">
                    <div class="flex items-end h-full">
                        <div class="w-full bg-white rounded-t-[20px] shadow dark:bg-gray-700">
                            <div class="flex flex-col">
                                <div class="flex items-start justify-between p-4">
                                    <div class="flex gap-x-7">
                                        <p onClick={() => setSelected(1)} class={`${selected == 1 ? "text-[#020D19]" : "text-[#9EA4AA]"} text-base`}>나이</p>
                                        <p onClick={() => setSelected(2)} class={`${selected == 2 ? "text-[#020D19]" : "text-[#9EA4AA]"} text-base`}>활동지역</p>
                                        <p onClick={() => setSelected(3)} class={`${selected == 3 ? "text-[#020D19]" : "text-[#9EA4AA]"} text-base`}>학력</p>
                                        <p onClick={() => setSelected(4)} class={`${selected == 4 ? "text-[#020D19]" : "text-[#9EA4AA]"} text-base`}>취업상태</p>
                                    </div>

                                </div>


                                <div class="flex flex-col justify-between w-full h-[296px] px-4">
                                    {
                                        selected == 1 &&
                                        <div class="flex flex-col mt-[70px]">

                                            <RangeSlider
                                                id="ageRange"
                                                min={1}
                                                max={100}
                                                value={selectedAge}
                                                onInput={setSelectedAge}
                                            />

                                            <div class="flex justify-between mt-[66px]">
                                                <p class="text-lg text-[#020D19] font-semibold">나이</p>
                                                <p class="text-[22px] text-[#020D19] font-semibold"><span class="text-lg">만</span> {selectedAge[0]} ~ {selectedAge[1]}세</p>
                                            </div>

                                        </div>
                                    }

                                    {
                                        selected == 2 &&
                                        <div class="flex flex-col mt-[45px]">
                                            <div class="flex flex-col gap-y-2">
                                                <div class="flex">
                                                    {
                                                        location_list.map((data, index) => {
                                                            if (index < 6) {
                                                                return (
                                                                    <SelectLocation
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedLocation;
                                                                            tmp[index] = !selectedLocation[index];
                                                                            if (index == 0) {
                                                                                tmp = checkLocation;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedLocation(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedLocation[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        location_list.map((data, index) => {
                                                            if (index >= 6 && index < 12) {
                                                                return (
                                                                    <SelectLocation
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedLocation;
                                                                            tmp[index] = !selectedLocation[index];
                                                                            if (index == 0) {
                                                                                tmp = checkLocation;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedLocation(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedLocation[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        location_list.map((data, index) => {
                                                            if (index >= 12) {
                                                                return (
                                                                    <SelectLocation
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedLocation;
                                                                            tmp[index] = !selectedLocation[index];
                                                                            if (index == 0) {
                                                                                tmp = checkLocation;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedLocation(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedLocation[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {
                                        selected == 3 &&
                                        <div class="flex flex-col mt-[45px]">
                                            <div class="flex flex-col gap-y-2">
                                                <div class="flex">
                                                    {
                                                        academic_list.map((data, index) => {
                                                            if (index < 4) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedAcademic;
                                                                            tmp[index] = !selectedAcademic[index];
                                                                            if (index == 0) {
                                                                                tmp = checkAcademic;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedAcademic(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedAcademic[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        academic_list.map((data, index) => {
                                                            if (index >= 4 && index < 7) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedAcademic;
                                                                            tmp[index] = !selectedAcademic[index];
                                                                            if (index == 0) {
                                                                                tmp = checkAcademic;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedAcademic(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedAcademic[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        academic_list.map((data, index) => {
                                                            if (index >= 7) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedAcademic;
                                                                            tmp[index] = !selectedAcademic[index];
                                                                            if (index == 0) {
                                                                                tmp = checkAcademic;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedAcademic(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedAcademic[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {
                                        selected == 4 &&
                                        <div class="flex flex-col mt-[45px]">
                                            <div class="flex flex-col gap-y-2">
                                                <div class="flex">
                                                    {
                                                        hired_list.map((data, index) => {
                                                            if (index < 4) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedHired;
                                                                            tmp[index] = !selectedHired[index];
                                                                            if (index == 0) {
                                                                                tmp = checkHired;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedHired(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedHired[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        hired_list.map((data, index) => {
                                                            if (index >= 4 && index < 7) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedHired;
                                                                            tmp[index] = !selectedHired[index];
                                                                            if (index == 0) {
                                                                                tmp = checkHired;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedHired(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedHired[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        hired_list.map((data, index) => {
                                                            if (index >= 7) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedHired;
                                                                            tmp[index] = !selectedHired[index];
                                                                            if (index == 0) {
                                                                                tmp = checkHired;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedHired(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedHired[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    <div class="flex justify-center items-center mb-9 w-full h-[54px] bg-[#4E60FF] rounded-xl"
                                        onClick={() => {
                                            // setAge(selectedAge);
                                            setShowModal(false);
                                        }}>
                                        <p class="text-lg text-[#FCFCFF] font-bold">선택완료</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div> : null}



            {showModal2 ?
                <div class="w-full max-w-[500px] h-screen bg-[#020D1980] bg-opacity-50 fixed top-0 z-40">
                    <div class="flex items-end h-full">
                        <div class="w-full bg-white rounded-t-[20px] shadow dark:bg-gray-700">
                            <div class="flex flex-col">
                                <div class="flex flex-row justify-between w-full p-4">
                                    <div class="w-[20px]"></div>
                                    <Image
                                        src={`/assets/images/b/explore/images/${
                                            card.fncIstNm == "경남은행" ? "gn_bnk.svg" :
                                            card.fncIstNm == "광주은행" ? "gj.svg" :
                                            card.fncIstNm == "교보생명보험주식회사" ? "kyobo.svg" :
                                            card.fncIstNm == "국민은행" ? "kb.svg" :
                                            card.fncIstNm == "농협은행주식회사" ? "nh.svg" :
                                            card.fncIstNm == "대구은행" ? "dgb.svg" :
                                            card.fncIstNm == "부산은행" ? "busan.svg" :
                                            card.fncIstNm == "수협은행" ? "sh.svg" :
                                            card.fncIstNm == "신한은행" ? "shinhan.svg" :
                                            card.fncIstNm == "우리은행" ? "woori.svg" :
                                            card.fncIstNm == "제주은행" ? "jeju.svg" :
                                            card.fncIstNm == "주식회사 신한저축은행" ? "shinhan.svg" :
                                            card.fncIstNm == "중소기업은행" ? "ibk.svg" :
                                            card.fncIstNm == "하나은행" && "hana.svg"
                                        }`}
                                        width={100}
                                        height={100}
                                        alt="bank"
                                    />
                                    <button type="button" onClick={() => {
                                        setShowModal2(false);

                                    }} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 items-center">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">close</span>
                                    </button>
                                </div>

                                <div class="mx-4">
                                    <p class="font-bold text-[22px] text-[#020D19]">{card.prdNm}</p>

                                    <div class="flex justify-between mt-[17px]">
                                        <p class="text-sm text-[#020D19]">{card.fncIstNm}</p>
                                        <p class="text-xs text-[#9EA4AA]">{card.prdSalDscnDt && card.prdSalDscnDt.slice(0, 4) + "." + card.prdSalDscnDt.slice(4, 6) + "." + card.prdSalDscnDt.slice(6)}</p>
                                    </div>

                                    <div class="w-full mt-5 border-b border-[#E8EBED]"></div>

                                    <div class="flex justify-between mt-[17px]">
                                        <p class="text-sm text-[#72787F] font-medium">신청마감일</p>
                                        <p class="text-sm text-[#020D19] font-medium mb-8">{card.regDate && card.regDate.slice(0, 4) + "." + card.regDate.slice(4, 6) + "." + card.regDate.slice(6)}</p>
                                    </div>

                                    {/* <div class="w-full mt-5 border-b border-[#E8EBED]"></div>

                                    <p class="text-[#2528AE] font-bold mt-[14px]">상세정보</p>
                                    <p class="text-[#020D19] text-sm mt-4 mb-[47px]">{card.desc1}</p> */}
                                </div>

                                <div class="flex w-full h-20 border-t-[0.3px] border-[#9CB6FF]">
                                    <div class="flex flex-col mt-2 items-center ml-[24px] text-center">
                                    <Image
                                            src="/assets/images/b/home/images/bookmark_tab_on.svg"
                                            width={20}
                                            height={20}
                                            class="mt-[2px]"
                                            alt="bookmark"
                                        />
                                        <p class="w-[30px] text-[#4E60FF] text-[11px] mt-3">북마크</p>
                                    </div>

                                    <div class="flex justify-center items-center w-full h-12 mt-2 ml-[26px] mr-4 bg-[#4E60FF] rounded-lg">
                                        <p class="text-[#FCFCFF] font-semibold text-sm">홈페이지 바로가기</p>
                                    </div>
                                </div>




                            </div>



                        </div>
                    </div>
                </div> : null}
        </div>
    );
}



const card_data = [
    {
      "id": 1,
      "fncIstNm": "경남은행",
      "prdNm": "경남은행 청년도약계좌",
      "prdSalDscnDt": "",
      "regDate": "20240108",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.knbank.co.kr",
      "user": null
    },
    {
      "id": 2,
      "fncIstNm": "경남은행",
      "prdNm": "경남은행 청년희망적금",
      "prdSalDscnDt": "20220305",
      "regDate": "20240108",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.knbank.co.kr",
      "user": null
    },
    {
      "id": 3,
      "fncIstNm": "경남은행",
      "prdNm": "모다드림 청년통장",
      "prdSalDscnDt": "",
      "regDate": "20240108",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.knbank.co.kr",
      "user": null
    },
    {
      "id": 4,
      "fncIstNm": "경남은행",
      "prdNm": "창원 청년내일통장",
      "prdSalDscnDt": "",
      "regDate": "20240108",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.knbank.co.kr",
      "user": null
    },
    {
      "id": 5,
      "fncIstNm": "광주은행",
      "prdNm": "KJB청년도약계좌",
      "prdSalDscnDt": "",
      "regDate": "20240116",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.kjbank.com",
      "user": null
    },
    {
      "id": 6,
      "fncIstNm": "광주은행",
      "prdNm": "KJB청년희망적금",
      "prdSalDscnDt": "20220305",
      "regDate": "20240116",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.kjbank.com",
      "user": null
    },
    {
      "id": 7,
      "fncIstNm": "광주은행",
      "prdNm": "전남청년미래적금",
      "prdSalDscnDt": "",
      "regDate": "20240116",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.kjbank.com",
      "user": null
    },
    {
      "id": 8,
      "fncIstNm": "교보생명보험주식회사",
      "prdNm": "교보청년저축보험(무배당)",
      "prdSalDscnDt": "",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.kyobo.co.kr",
      "user": null
    },
    {
      "id": 9,
      "fncIstNm": "국민은행",
      "prdNm": "KB청년도약계좌",
      "prdSalDscnDt": "",
      "regDate": "20240105",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.kbstar.com",
      "user": null
    },
    {
      "id": 10,
      "fncIstNm": "국민은행",
      "prdNm": "KB청년희망적금",
      "prdSalDscnDt": "20220304",
      "regDate": "20240105",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.kbstar.com",
      "user": null
    },
    {
      "id": 11,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "NH청년도약계좌",
      "prdSalDscnDt": "",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 12,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "NH청년희망적금",
      "prdSalDscnDt": "20220305",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 13,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "경기도 일하는 청년 마이스터 통장",
      "prdSalDscnDt": "",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 14,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "경기도 일하는 청년 연금지원 통장",
      "prdSalDscnDt": "",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 15,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "경기도 일하는 청년 통장(일하는 청년 매칭적금)",
      "prdSalDscnDt": "",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 16,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "경기도 일하는 청년 통장(일하는 청년 적금)",
      "prdSalDscnDt": "",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 17,
      "fncIstNm": "대구은행",
      "prdNm": "DGB청년도약계좌",
      "prdSalDscnDt": "",
      "regDate": "20240102",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.dgb.co.kr",
      "user": null
    },
    {
      "id": 18,
      "fncIstNm": "대구은행",
      "prdNm": "DGB청년희망적금",
      "prdSalDscnDt": "20220304",
      "regDate": "20240102",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.dgb.co.kr",
      "user": null
    },
    {
      "id": 19,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "NH청년도약계좌",
      "prdSalDscnDt": "",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 20,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "NH청년희망적금",
      "prdSalDscnDt": "20220305",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 21,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "경기도 일하는 청년 마이스터 통장",
      "prdSalDscnDt": "",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 22,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "경기도 일하는 청년 연금지원 통장",
      "prdSalDscnDt": "",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 23,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "경기도 일하는 청년 통장(일하는 청년 매칭적금)",
      "prdSalDscnDt": "",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 24,
      "fncIstNm": "농협은행주식회사",
      "prdNm": "경기도 일하는 청년 통장(일하는 청년 적금)",
      "prdSalDscnDt": "",
      "regDate": "20240104",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.nhbank.co.kr",
      "user": null
    },
    {
      "id": 25,
      "fncIstNm": "대구은행",
      "prdNm": "DGB청년도약계좌",
      "prdSalDscnDt": "",
      "regDate": "20240102",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.dgb.co.kr",
      "user": null
    },
    {
      "id": 26,
      "fncIstNm": "대구은행",
      "prdNm": "DGB청년희망적금",
      "prdSalDscnDt": "20220304",
      "regDate": "20240102",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.dgb.co.kr",
      "user": null
    },
    {
      "id": 27,
      "fncIstNm": "부산은행",
      "prdNm": "BNK청년희망적금",
      "prdSalDscnDt": "20221017",
      "regDate": "20240118",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.busanbank.co.kr",
      "user": null
    },
    {
      "id": 28,
      "fncIstNm": "부산은행",
      "prdNm": "부산은행 청년도약계좌",
      "prdSalDscnDt": "20230710",
      "regDate": "20240118",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.busanbank.co.kr",
      "user": null
    },
    {
      "id": 29,
      "fncIstNm": "부산은행",
      "prdNm": "부산청년 기쁨두배통장",
      "prdSalDscnDt": "",
      "regDate": "20240118",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.busanbank.co.kr",
      "user": null
    },
    {
      "id": 30,
      "fncIstNm": "부산은행",
      "prdNm": "청년희망날개통장",
      "prdSalDscnDt": "",
      "regDate": "20240118",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.busanbank.co.kr",
      "user": null
    },
    {
      "id": 31,
      "fncIstNm": "수협은행",
      "prdNm": "Sh어촌청년을 응원海",
      "prdSalDscnDt": "",
      "regDate": "20240109",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.shbank.co.kr",
      "user": null
    },
    {
      "id": 32,
      "fncIstNm": "신한은행",
      "prdNm": "신한 청년 DREAM 통장",
      "prdSalDscnDt": "",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.shinhan.com",
      "user": null
    },
    {
      "id": 33,
      "fncIstNm": "신한은행",
      "prdNm": "신한 청년 DREAM 통장(인천시)",
      "prdSalDscnDt": "",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.shinhan.com",
      "user": null
    },
    {
      "id": 34,
      "fncIstNm": "신한은행",
      "prdNm": "신한 청년도약좌",
      "prdSalDscnDt": "",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.shinhan.com",
      "user": null
    },
    {
      "id": 35,
      "fncIstNm": "신한은행",
      "prdNm": "신한 청년저축왕 적금",
      "prdSalDscnDt": "20230802",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.shinhan.com",
      "user": null
    },
    {
      "id": 36,
      "fncIstNm": "신한은행",
      "prdNm": "신한 청년희망적금",
      "prdSalDscnDt": "20220304",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.shinhan.com",
      "user": null
    },
    {
      "id": 37,
      "fncIstNm": "신한은행",
      "prdNm": "청년 처음적금",
      "prdSalDscnDt": "",
      "regDate": "20240307",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.shinhan.com",
      "user": null
    },
    {
      "id": 38,
      "fncIstNm": "신한은행",
      "prdNm": "희망두배 청년통장",
      "prdSalDscnDt": "",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.shinhan.com",
      "user": null
    },
    {
      "id": 39,
      "fncIstNm": "우리은행",
      "prdNm": "우리 청년희망 적금",
      "prdSalDscnDt": "20220304",
      "regDate": "20240116",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.wooribank.com",
      "user": null
    },
    {
      "id": 40,
      "fncIstNm": "우리은행",
      "prdNm": "우리 청년도약계좌",
      "prdSalDscnDt": "",
      "regDate": "20240116",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.wooribank.com",
      "user": null
    },
    {
      "id": 41,
      "fncIstNm": "우리은행",
      "prdNm": "우리 청년약속 통장",
      "prdSalDscnDt": "",
      "regDate": "20240116",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.wooribank.com",
      "user": null
    },
    {
      "id": 46,
      "fncIstNm": "제주은행",
      "prdNm": "제주은행 청년희망적금",
      "prdSalDscnDt": "20220304",
      "regDate": "20240125",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.jejubank.com",
      "user": null
    },
    {
      "id": 47,
      "fncIstNm": "주식회사 신한저축은행",
      "prdNm": "청포도 청년적금",
      "prdSalDscnDt": "",
      "regDate": "20240109",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.shinhan.com",
      "user": null
    },
    {
      "id": 48,
      "fncIstNm": "중소기업은행",
      "prdNm": "IBK청년도약계좌",
      "prdSalDscnDt": "",
      "regDate": "20240108",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.ibk.co.kr",
      "user": null
    },
    {
      "id": 49,
      "fncIstNm": "중소기업은행",
      "prdNm": "IBK청년도약플러스적금",
      "prdSalDscnDt": "",
      "regDate": "20240321",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.ibk.co.kr",
      "user": null
    },
    {
      "id": 50,
      "fncIstNm": "중소기업은행",
      "prdNm": "IBK청년희망적금",
      "prdSalDscnDt": "20220304",
      "regDate": "20240108",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.ibk.co.kr",
      "user": null
    },
    {
      "id": 51,
      "fncIstNm": "하나은행",
      "prdNm": "대전시 미래두배청년통장",
      "prdSalDscnDt": "",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.hanabank.com",
      "user": null
    },
    {
      "id": 52,
      "fncIstNm": "하나은행",
      "prdNm": "대전시청년희망통장",
      "prdSalDscnDt": "20230706",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.hanabank.com",
      "user": null
    },
    {
      "id": 53,
      "fncIstNm": "하나은행",
      "prdNm": "청년내일저축계좌",
      "prdSalDscnDt": "",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.hanabank.com",
      "user": null
    },
    {
      "id": 54,
      "fncIstNm": "하나은행",
      "prdNm": "청년저축계좌",
      "prdSalDscnDt": "20220128",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.hanabank.com",
      "user": null
    },
    {
      "id": 55,
      "fncIstNm": "하나은행",
      "prdNm": "청년희망키움통장",
      "prdSalDscnDt": "20220128",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.hanabank.com",
      "user": null
    },
    {
      "id": 56,
      "fncIstNm": "하나은행",
      "prdNm": "하나 청년도약 계좌",
      "prdSalDscnDt": "",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.hanabank.com",
      "user": null
    },
    {
      "id": 57,
      "fncIstNm": "하나은행",
      "prdNm": "하나 청년희망적금",
      "prdSalDscnDt": "20220305",
      "regDate": "20240115",
      "viewCount": 0,
      "bookmarkCount": 0,
      "homepageLink": "https://www.hanabank.com",
      "user": null
    }
  ];


const location_list = ["전체", "서울", "부산", "대구", "인천", "광주", "경기", "울산", "강원", "충북", "충남", "세종", "경북", "경남", "대전", "전북", "전남"];

const academic_list = ["전체", "고졸 미만", "고교 재학", "고졸 예정", "고교 졸업", "대학 재학", "대졸 예정", "대학 졸업", "석/박사", "제한없음"];

const hired_list = ["전체", "재직자", "미취업자", "(예비) 창업자", "자영업자", "단기근로자", "일용근로자", "프리랜서", "영농종사자", "제한없음"];