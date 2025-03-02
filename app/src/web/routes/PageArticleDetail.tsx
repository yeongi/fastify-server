import {useLoaderData} from "react-router";
import type {Route} from "./+types/PageArticleDetail";

export async function loader({request, params, context}:Route.LoaderArgs) {
    console.log("서버에서 실행된다고 ?!!?");
    // request -> web API Request 타입이다.
    // 웹 표준이니까 Header 객체를 사용하는 방법은 MDN 문서를 참고하면 된다.

    const header = request.headers.get("x-custom-header");
    // params를 다루는 방법
    const articleId = params.articleId;

    console.log("header : ", header);
    console.log("params : ", articleId);

    const needRedirect = true;
    
    if(needRedirect) {
        const headers = new Headers(); 
        headers.set("Location", "/");

        return new Response(null, {
            status: 302,
            headers
        })
    }

    return {
        message : "Hello, article!"
    }
}


export default function PageArticleDetail() {

  const data = useLoaderData<typeof loader>();

  return <div>
    Message: {data.message}
  </div>;
}