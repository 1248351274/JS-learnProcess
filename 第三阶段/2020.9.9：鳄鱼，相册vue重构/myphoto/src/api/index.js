import axios from "axios";
export function getPhotos() {
    return axios.get("/api/getPhotos")
    // return axios.get("http://localhost:8081/getPhotos");
}

export function uploadPhoto(file, onUploadProgress) {
    const formData = new FormData();
    formData.append("img", file);

    return axios.post("/api/upload", formData, {
        onUploadProgress
    })
}