import { BASE_API_URL } from "../environment/environment";
import { AddVideoRequest } from "../models/requests/video/addVideoRequest";
import { UpdateVideoRequest } from "../models/requests/video/updateVideoRequest";
import { AddVideoResponse } from "../models/responses/video/addVideoResponse";
import { GetAllVideoResponse } from "../models/responses/video/getAllVideoResponse";
import { GetVideoDetailResponse } from "../models/responses/video/getVideoDetailResponse";
import { UpdateVideoResponse } from "../models/responses/video/updateVideoResponse";
import { BaseService } from "./baseService";

class VideoService extends BaseService<
    GetAllVideoResponse,
    GetVideoDetailResponse,
    AddVideoRequest,
    UpdateVideoRequest,
    AddVideoResponse,
    UpdateVideoResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Video";
    }

    getByFilter() { } // ortak olmayan fonkları base'e alamayacağımızdan ait olduğu class içinde yazarız.
}

export default new VideoService();