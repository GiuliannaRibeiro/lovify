const MAX_SIZE = 800;
const JPEG_QUALITY = 0.82;

export function compressImage(
  file: File
): Promise<string> {
  return new Promise(
    (resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();

        img.onload = () => {
          let { width, height } = img;

          if (
            width > MAX_SIZE ||
            height > MAX_SIZE
          ) {
            if (width > height) {
              height =
                (height / width) *
                MAX_SIZE;
              width = MAX_SIZE;
            } else {
              width =
                (width / height) *
                MAX_SIZE;
              height = MAX_SIZE;
            }
          }

          const canvas =
            document.createElement(
              "canvas"
            );

          canvas.width = width;
          canvas.height = height;

          const ctx =
            canvas.getContext("2d");

          if (!ctx) {
            reject(
              new Error(
                "Canvas not supported"
              )
            );

            return;
          }

          ctx.drawImage(
            img,
            0,
            0,
            width,
            height
          );

          resolve(
            canvas.toDataURL(
              "image/jpeg",
              JPEG_QUALITY
            )
          );
        };

        img.onerror = () => {
          reject(
            new Error(
              "Failed to load image"
            )
          );
        };

        img.src =
          reader.result as string;
      };

      reader.onerror = () => {
        reject(
          new Error(
            "Failed to read file"
          )
        );
      };

      reader.readAsDataURL(file);
    }
  );
}
