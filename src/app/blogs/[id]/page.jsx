import React from "react";

import Blog from "@/src/components/blogs/Blog";

export async function generateStaticParams() {
  //const posts = await fetch('https://.../posts').then((res) => res.json())

  // return posts.map((post) => ({
  //   id: post.id,
  // }))

  return {
    user: {
      name: "Micheal Tyler",
    },
    createdAt: new Date(),
    blogPictureUrl:
      "https://res.cloudinary.com/devemmy/image/upload/v1681343921/home_p4un4n.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum est, iaculis eu lorem vel, dictum vehicula nulla. Quisque imperdiet arcu eu nunc varius aliquet vulputate vitae leo. In nec sem vel odio pharetra rhoncus nec sed dui. Sed dignissim nulla nibh, et fringilla neque egestas ut. Suspendisse potenti. Nulla cursus augue sem, sit amet mattis nisl sollicitudin et. Sed nec hendrerit felis. Maecenas eget justo porttitor, posuere nibh vel, gravida urna. Fusce mollis interdum odio, sit amet semper sem pretium quis. Suspendisse potenti. Duis condimentum sollicitudin libero eget dapibus. Donec sodales, massa quis eleifend elementum, dui ante tempor leo, non suscipit arcu velit id urna. Maecenas semper facilisis tortor, in hendrerit est interdum sollicitudin. Phasellus egestas lectus a est accumsan vulputate. Fusce sodales, justo ut iaculis accumsan, sem sem porta risus, eu finibus felis ligula nec quam. In sit amet eleifend leo, quis ultricies nisl. Integer et suscipit sapien, in sodales ante. Cras pretium id eros id ullamcorper. Morbi malesuada, metus et venenatis volutpat, tellus arcu tempor nisl, eget finibus tortor ante pharetra ligula. In pharetra dui ac leo pellentesque, suscipit posuere augue consectetur. Nullam sed nulla eu magna fringilla congue at id lorem. Maecenas consectetur dolor diam, at sollicitudin enim scelerisque vitae. Duis eu justo odio. Curabitur faucibus elit ac rhoncus condimentum. Sed urna urna, rhoncus mattis velit vel, consectetur rhoncus nulla. Etiam gravida elementum nisi ut mollis. Nunc et viverra nisi. Morbi lacinia, sem vitae tincidunt mattis, metus libero rutrum metus, vel molestie nisi nisi aliquet magna. Nam varius nisi sit amet orci vulputate, eu efficitur est cursus. Vivamus ac mi vestibulum, rutrum nunc fringilla, mollis erat. Sed elementum ullamcorper libero, quis ultrices lectus cursus a. Ut vel nulla in ligula sagittis pulvinar tincidunt sed quam. Nunc convallis gravida leo, vitae pulvinar turpis scelerisque eu. Morbi in tristique nisl. Etiam at metus ante. Suspendisse potenti. Donec eleifend lacus eget sapien rutrum porta. Ut malesuada volutpat diam, vel sodales odio dictum ut. Suspendisse maximus at libero eu porttitor. Maecenas semper justo vel nunc dapibus, vel rutrum sapien facilisis. Sed euismod sem non purus maximus, quis tincidunt nulla iaculis. Vestibulum eu arcu non augue vehicula faucibus. Proin vulputate feugiat elit. Nulla libero lacus, congue et efficitur ac, porta condimentum justo. In hac habitasse platea dictumst. Maecenas justo massa, finibus a vulputate eget, tincidunt et arcu. In nec molestie ante, quis tincidunt eros. Donec molestie nunc at eleifend sodales. Aliquam erat volutpat. Praesent aliquet purus venenatis nulla hendrerit commodo. Pellentesque efficitur mauris ut elit efficitur porttitor. Nulla consequat tortor vel nunc luctus pulvinar. Morbi dapibus mauris vel dictum feugiat.",
  };
}

const ReadBlog = ({ params }) => {
  return <Blog blog={params} />;
};

export default ReadBlog;
