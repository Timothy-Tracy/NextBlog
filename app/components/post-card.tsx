import { Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import Tag from "./tag";

export function PostCard(post: Post) {
    return (
      <div className="py-6">
        <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <time dateTime={post.date} className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <div className="space-y-5 xl:col-span-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                <Link
                  href={post.url}
                  className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                  legacyBehavior>
                  {post.title}
                </Link>
              </h2>
            </div>
            <div className="flex flex-wrap">
              {post.tags!.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
          <div className="space-y-5 xl:col-span-4">
            <div className="max-w-none pt-5 text-gray-500 dark:text-gray-400">
              {post.summary}
            </div>
          </div>
        </div>
  
      </div>
    );
  }