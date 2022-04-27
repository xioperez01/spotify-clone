import React from 'react';
import {
  Flex,
  Icon,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { BiTime } from 'react-icons/bi';
import { members } from './data';
import Row from './RowTable';

const MemberTable = (props) => {
  return (
    <Table {...props}>
      <Thead>
        <Tr>
          <Th borderBottom="1px" borderBottomColor="#5F6762" w="60vw">
            <Flex justify="flex-start">
              <Text fontSize="20px" color="#D2CDCC" mr="20px">
                #
              </Text>
              <Text
                color="#D2CDCC"
                _hover={{ cursor: 'context-menu', color: 'white' }}
              >
                TÍTULO
              </Text>
            </Flex>
          </Th>
          <Th
            color="#D2CDCC"
            borderBottom="1px"
            borderBottomColor="#5F6762"
            _hover={{ cursor: 'context-menu', color: 'white' }}
          >
            ÁLBUM
          </Th>
          <Th
            color="#D2CDCC"
            isTruncated
            borderBottom="1px"
            borderBottomColor="#5F6762"
            _hover={{ cursor: 'context-menu', color: 'white' }}
          >
            FECHA INCORPORACIÓN
          </Th>
          <Th
            w="90px"
            color="#D2CDCC"
            borderBottom="1px"
            borderBottomColor="#5F6762"
          >
            <Flex justify="flex-end">
              <Icon
                boxSize="20px"
                position="relative"
                right="30px"
                as={BiTime}
                _hover={{ cursor: 'context-menu', color: 'white' }}
              ></Icon>
            </Flex>
          </Th>
        </Tr>
      </Thead>
      <Tbody color="#D2CDCC" fontSize="14px">
        {members.map((member) => (
          <Row member={member} />
        ))}
      </Tbody>
    </Table>
  );
};

export default MemberTable;
