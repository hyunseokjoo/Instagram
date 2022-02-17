import React, { Component, useEffect, useState } from 'react';
import Axios from 'axios';
import Post from 'Post';

const apiUrl = "http://localhost:8000/api/posts/";

function PostList() {
    const [postList, setPostList] =useState([]);

    //axios는 ajax통신을 활용하기 위한 라이브러리로 
    //django에 접근하여 응답을 받는 것을 지원하기 위해 사용한다.
    //axios는 객체 반환하는 형식이 promise형식이다.
    useEffect(() => {
        Axios.get(apiUrl)
        .then(response => {
            const { data } = response;
            setPostList(data);
            console.log("loaded response : ", response);
        })
        .catch(error => {
            //error.response;
        })
        console.log("mounted");
    });
    return(
        <div>
            <h1>PostList</h1>
            {postList.map( post =><Post post={post} key={post.id}/>)}
        </div>
    );
};
// div에 key를 넣는 이유는 
// react에서는 map을 사용할 때 유일한 항목이라는 것을 알려주어야 하기때문에 
// Django에서 임의로 생성이 되는 id값을 가져와 활용하여 유일한 값이라는 것을 인지 시켜준다.

// img alt를 넣는 이유는 img src가 없을 때 처리해야하는 내용이 없으면 
// 화면단에서 불편한 내용이 부기 때문에 대채 하는 항목을 지정해야하기 때문이다.

export default PostList;