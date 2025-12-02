// mock/mockData.ts

// 1. 프로필/개인정보 Mock Data
export const mockProfileData = {
  // 마이페이지 조회용
  name: "유소희",
  id: "user_nickname",
  email: "test@example.com",
  phone: "010-1234-5678",

  // 체중 정보
  currentHeight: "160cm",
  currentWeight: "69kg",
  targetWeight: "50kg",
};

// 2. 챌린지 Mock Data
export const mockChallenges = [
  {
    id: 1,
    name: "저탄고단 챌린지",
    duration: "7일",
    status: "참여",
    description: "일주일 동안 저탄수화물 고단백 식단을 인증해보세요!",
    period: "2025.12.01 ~ 2025.12.07",
  },
  {
    id: 2,
    name: "하루 1500kcal 지키기",
    duration: "14일",
    status: "참여완료",
    description: "매일 1500kcal 이하로 섭취하여 체중 조절에 성공하세요.",
    period: "2025.11.01 ~ 2025.11.14",
  },
  {
    id: 3,
    name: "물 2L 마시기",
    duration: "3일",
    status: "참여",
    description: "매일 물 2리터 이상 마시기 인증",
    period: "2025.12.05 ~ 2025.12.07",
  },
];

export const getChallengeById = (id: number) => {
  return mockChallenges.find((c) => c.id === id);
};
