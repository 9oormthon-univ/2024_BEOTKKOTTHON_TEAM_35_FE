"use client";

import { useState } from "react";

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import "./RangeSliderStyle.css";

import SelectLocation from "@/app/_components/common/Explore/SelectLocation";
import SelectAcademic from "@/app/_components/common/Explore/SelectAcademic";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { Scholarship } from "@/app/_state/products";
import RecommendCardScholar from "@/app/_components/common/RecommendCardScholar";
import RecommendCardThree from "@/app/_components/common/RecommendCardThree";


export default function Tab1() {


    const [age, setAge] = useState([18, 34]);
    const [location, setLocation] = useState();
    const [academic, setAcademic] = useState();
    const [isHired, setIsHired] = useState();
    const [selected, setSelected] = useState(1);

    const [sortBy, setSortBy] = useState(true);
    const [sortByClicked, setSortByClicked] = useState(false);

    const [card, setCard] = useState();

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
                <p class="mt-5 text-[#454C53] text-xs"></p>

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
                    card_data.map((data, index) => {
                        console.log(selectedLocation[location_list.indexOf(data.location)] || selectedLocation[0]);
                        console.log(selectedAcademic[academic_list.indexOf(data.academic)] || selectedAcademic[0]);
                        console.log(selectedHired[hired_list.indexOf(data.is_hired)] || selectedHired[0]);

                        academic_list
                        if(Math.min(selectedAge[0], selectedAge[1]) <= data.age) {
                            if(data.age >= Math.min(selectedAge[0], selectedAge[1])) {
                                if(selectedLocation[location_list.indexOf(data.location)] || selectedLocation[0]) {
                                    if(selectedAcademic[academic_list.indexOf(data.academic)] || selectedAcademic[0]) {
                                        if(selectedHired[hired_list.indexOf(data.is_hired)] || selectedHired[0]) {
                                            return(
                                                <RecommendCardScholar
                                                class={`${ (Math.min(selectedAge[0], selectedAge[1]) <= data.age) ?  "block" : "hidden"}`}
                                                data={data}
                                                key={index}
                                                onClick={() => {
                                                    setShowModal2(true);
                                                    setCard(data);
                                                }}
                                            />
                                            );
                                        }
                                    }

                                }
                            }
                            
                        }
                            

                        })

                        
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
                                    <p>{card.org}</p>
                                    <button type="button" onClick={() => {
                                        setShowModal2(false);

                                    }} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 items-center">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">close</span>
                                    </button>
                                </div>

                                <div class="mx-4">
                                    <p class="font-bold text-[22px] text-[#020D19]">{card.name}</p>
                                    <p class="my-10 text-[#020D19]">{card.desc}</p>
                                    
                                    <div class="flex justify-between mt-[17px]">
                                        <p class="text-sm text-[#020D19]">{card.age}살 까지</p>
                                        <p class="text-xs text-[#9EA4AA]">{card.location}</p>
                                    </div>

                                    <div class="w-full mt-5 border-b border-[#E8EBED]"></div>

                                    <div class="flex justify-between mt-[17px]">
                                        <p class="text-sm text-[#72787F] font-medium">신청마감일</p>
                                        <p class="text-sm text-[#020D19] font-medium mb-8">{card.date}</p>
                                    </div>

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
        age : 23,
        location : "전체",
        academic : "대학 재학",
        is_hired : "제한없음",
        name : "장학생",
        date : "2024.03.31",
        org : "(재)한국로타리장학문화재단",
        desc : "온라인으로만 신청 가능한 장학 시스템에서 필요한 문서 제출 및 중복 수혜 제한이 있는 장학 프로그램",
        type:"recommend",
        view: 100,
        bookmark:12},
        {
        age : 24,
        location : "전체",
        academic : "제한없음",
        is_hired : "제한없음",
        name : "햇살론Youth",
        date : "2024.12.31",
        org : "서민금융진흥원",
        type:"recommend",
        desc : "온라인 신청만 가능한 장학 시스템으로, 필요한 문서 제출과 중복 수혜 제한이 있습니다.",
        view: 71,
        bookmark:31},
        {
        age : 23,
        location : "충북",
        academic : "대학 재학",
        is_hired : "미취업자",
        name : "성적 장학생",
        date : "2024.03.08",
        org : "금왕장학회",
        type:"pop",
        desc : "장학생 신청에 필요한 문서는 주민등록등본, 통장사본(해당자), 수능성적표 또는 생활기록부(신입생), 성적증명서(재학생) 등이며, 중복 신청 불가 및 휴학 예정자 및 군입대 예정자도 해당됩니다.",
        view: 91,
        bookmark:41},
        {
        age : 23,
        location : "충북",
        academic : "대학 재학",
        is_hired : "미취업자",
        name : "특기장학생",
        date : "2024.03.08",
        org : "금왕장학회",
        type:"pop",
        desc : "장학생 신청에 필요한 문서는 개인정보 동의서, 주민등록등본(부모와 주소지가 다를 경우 가족관계증명서), 통장사본(친권자 또는 본인), 기초생활수급자 증명서(해당자)입니다. 특기장학생은 상장사본과 재학증명서가 추가로 필요하며, 중복 신청은 불가능합니다.",
        view: 88,
        bookmark:9},
        {
        age : 20,
        location : "충북",
        academic : "대학 재학",
        is_hired : "미취업자",
        name : "성적우수장학생",
        date : "2024.03.06",
        org : "삼성면장학회",
        desc : "제외사항: 40세 이상, 원격/야간 대학, 평생교육원, 학점은행 재학자는 지원 불가",
        view: 291,
        bookmark:41},
        {
        age : 19,
        location : "충북",
        academic : "고졸",
        is_hired : "미취업자",
        name : "특기장학생",
        date : "2024.03.06",
        org : "삼성면장학회",
        desc : "제외사항: 40세 이상, 원격/야간 대학, 평생교육원, 학점은행 재학자 등.",
        view: 92,
        bookmark:11},
        {
        age : 21,
        location : "강원",
        academic : "대학 재학",
        is_hired : "미취업자",
        name : "하이원SOS장학생",
        date : "2024.03.31",
        org : "강원랜드사회공헌위원회",
        desc : "지원불가 사항: 2023 강원랜드 멘토링 장학, 나눔/키움 장학생, SOS 선발 이력 중복 지원 불가(동일 사유로), 1가구당 연 1회 지원 제한.",
        view: 89,
        bookmark:5},
        {
        age : 23,
        location : "경기",
        academic : "대학 재학",
        is_hired : "미취업자",
        name : "장학생",
        date : "2024.03.04",
        org : "강상면장학회",
        desc : "지원 불가 사항: 휴학생, 대학원생, 유학생, 방송통신대학생, 산업체 위탁교육생, 원격대학 및 학점은행제, 교환학생, 직업전문학교 학생 등, 직전학기 등록금 전액 지원받는 대학생, 정규학기 초과 또는 조기졸업 예정자.",
        view: 81,
        bookmark:51},
        {
        age : 23,
        location : "경기",
        academic : "대학 재학",
        is_hired : "미취업자",
        name : "특기장학생",
        date : "2024.03.04",
        org : "강상면장학회",
        desc : "지원 불가 사항: 휴학생, 대학원생, 유학생, 방송통신대학생, 산업체 위탁교육생, 원격대학, 학점은행제, 교환학생, 직업전문학교 재학생 등, 직전학기 등록금 전액 지원받은 대학생, 초과학기 조기졸업 예정자, 개인 소득이 있는 학생.",
        view: 19,
        bookmark:7},
        {
        age : 24,
        location : "전남",
        academic : "대학 재학",
        is_hired : "미취업자",
        name : "성적우수장학생",
        date : "2024.03.08",
        org : "재단법인구례장학회",
        desc : "지원 불가 사항: 휴학중인 학생, 등록금 범위 초과, 국가 및 지방자치단체 등으로부터 등록금 수업료를 전액 지원받은 대학교의 신입 및 재학생, 등록금 납부 금액이 20만원 미만인 경우, 정규학제 기간을 초과하여 재학 중인 학생.",
        view: 15,
        bookmark:15},
        {
        age : 22,
        location : "전남",
        academic : "대학 재학",
        is_hired : "미취업자",
        name : "저소득층장학생",
        date : "2024.03.08",
        org : "재단법인구례장학회",
        desc : "지원 불가 사항: 휴학중인 학생, 등록금 범위 초과, 국가 및 지방자치단체 등으로부터 등록금 수업료를 전액 지원받은 대학교의 신입 및 재학생, 실 등록금 납부 금액이 최저 지급금액(20만원)보다 적은 경우, 정규학제 기간을 초과하여 재학 중인 학생.",
        view: 51,
        bookmark:15},
        {
        age : 23,
        location : "전남",
        academic : "대학 재학",
        is_hired : "미취업자",
        name : "다자녀장학생",
        date : "2024.03.08",
        org : "재단법인구례장학회",
        desc : "지원 불가 사항: 휴학중인 학생, 등록금 범위 초과, 국가 및 지방자치단체 등으로부터 등록금 수업료를 전액 지원받은 대학교의 신입 및 재학생, 실 등록금 납부 금액이 20만원보다 적은 경우, 정규학제 기간을 초과하여 재학 중인 학생.",
        view: 100,
        bookmark:12
        }
];


const location_list = ["전체", "서울", "부산", "대구", "인천", "광주", "경기", "울산", "강원", "충북", "충남", "세종", "경북", "경남", "대전", "전북", "전남"];

const academic_list = ["전체", "고졸 미만", "고교 재학", "고졸 예정", "고교 졸업", "대학 재학", "대졸 예정", "대학 졸업", "석/박사", "제한없음"];

const hired_list = ["전체", "재직자", "미취업자", "(예비) 창업자", "자영업자", "단기근로자", "일용근로자", "프리랜서", "영농종사자", "제한없음"];


