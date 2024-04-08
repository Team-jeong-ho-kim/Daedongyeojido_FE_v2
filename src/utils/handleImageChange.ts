export const handleImageChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  func: (file: Blob) => void
) => {
  const files = event.target.files;
  if (files) {
    const file = files[0];
    const extension = file.name.split(".").pop()?.toLowerCase();

    const allowedExtensions = [
      "png",
      // "jpg",
      // "jpeg",
      // "gif",
      // "pdf",
      // "tiff",
      // "psd",
      // "bmp",
    ];

    if (extension && allowedExtensions.includes(extension)) {
      func(file);
    } else {
      alert("허용되지 않은 파일 형식입니다.");
    }
  }
};
