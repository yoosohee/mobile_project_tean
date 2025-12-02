// utils/ProfileStore.ts (글로벌 상태 저장소)

let profileImageUri: string | null = null;
let subscribers: (() => void)[] = [];

// 현재 URI를 반환
export const getProfileImageUri = () => profileImageUri;

// 상태 업데이트 및 모든 구독자에게 알림
export const setProfileImageUri = (newUri: string | null) => {
  if (profileImageUri !== newUri) {
    profileImageUri = newUri;
    // 상태가 변경되었음을 모든 컴포넌트에게 알림
    subscribers.forEach((callback) => callback());
  }
};

// 컴포넌트가 상태 변경을 감지할 수 있도록 구독/구독 해제 기능 제공
export const subscribe = (callback: () => void) => {
  subscribers.push(callback);
  // 컴포넌트 언마운트 시 구독 해제 함수 반환
  return () => {
    subscribers = subscribers.filter((sub) => sub !== callback);
  };
};
