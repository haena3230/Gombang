// 댓글쓰기 눌렀을때 나오는 ClubFeedPage
import React from 'react'
import { ScrollView,View, Text } from 'react-native';
import ClubFeed from '~/Components/Club/ClubFeed';
import { Comments, CommentList } from '~/Components/Club/ClubFeed/Comments';

const ClubFeedPage=()=>{
    return(
        <View style={{flex:1}}>
            <ScrollView>
                <ClubFeed />
                <CommentList />
                 <CommentList />
                  <CommentList />
                   <CommentList />

            </ScrollView>
            <Comments holder={'댓글을 입력하세요.'}/>
        </View>
    )
}

export default ClubFeedPage;