import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const BigCard = ({item}) => {
  return (
    <Flex w="500px" b={item?.color}>
        <Text>{item?.artist}</Text>
        <Text>{item?.title}</Text>
        <Text>{item?.num}{item.description}</Text>
    </Flex>
  )
}

export default BigCard
