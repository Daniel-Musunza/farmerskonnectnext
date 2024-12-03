import { Metadata, ResolvingMetadata } from "next/types";
import Shell from "./shell";
import { getBlogs } from "@/lib/getBlogs";

type Props = {
    params: { id: string }; // id is a string
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = params;
    const blogs = await getBlogs();

    const thisblog = blogs.find((b: any) => b.id.toString() === id);

    return {
        title: thisblog?.title || "Blog",
        description: thisblog?.description || "Default description",
        keywords: "",
    };
}

export async function generateStaticParams() {
    const blogs = await getBlogs();
    const paths = blogs.map((b: any) => ({
        id: b.id.toString(), // Convert ID to string
    }));

    return paths;
}

export default async function Blogs({ params }: { params: { id: string } }) {
    const blogs: any = await getBlogs();
    const blog = blogs.find((b: any) => b.id.toString() === params.id);

    return <Shell blog={blog} blogs={blogs} />;
}
