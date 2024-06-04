import ResponseDto from "src/apis/response.dto";

// description: 로그인 유저 정보 불러오기 Response body Dto
export interface GetSignInUserResponseDto extends ResponseDto {
    userId: string;
    userRole: string;

}