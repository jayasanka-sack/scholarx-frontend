import React from 'react';
import { Typography, List, Button, Avatar } from 'antd';
import { Mentor } from './interfaces';

const { Title } = Typography;

const listData: Mentor[] = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    id: i,
    name: 'John Doe',
    linkedinUrl: 'https://www.linkedin.com/',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Brief Intro about the mentee.',
  });
}

function ManageMentors() {
  return (
    <div>
      <Title>Manage Mentors</Title>
      <List
        itemLayout="horizontal"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button key="edit" type="primary">
                Edit
              </Button>,
              <Button key="more" type="default">
                More
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="#">{item.name}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default ManageMentors;
