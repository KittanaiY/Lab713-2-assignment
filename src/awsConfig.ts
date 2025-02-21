import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
    credentials: {
        accessKeyId: "6c6fdcffbf8613b8fc0b4592f2fd957a",
        secretAccessKey: "c267f404e3377df83e441e939f8a10cc3a86e05b1576b5b536476c7590a38ac9"
        },
        endpoint: "https://ajrmgdqkywfkemezlukr.supabase.co/storage/v1/s3",
        region: "ap-southeast-1",
        forcePathStyle: true
});