import React from "react";
import {
  Icon,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BiTime } from "react-icons/bi";
import Row from "./RowTable";

const MemberTable = (items) => {
  return (
    <Table w="100%">
      <Thead>
        <Tr>
          <Th
            borderBottom="1px"
            borderBottomColor="#5F6762"
            w="20px"
            px={0}
            textAlign="center"
            pl={2}
          >
            <Text fontSize="20px" color="#D2CDCC">
              #
            </Text>
          </Th>
          <Th borderBottom="1px" borderBottomColor="#5F6762">
            <Text
              color="#D2CDCC"
              _hover={{ cursor: "context-menu", color: "white" }}
            >
              TÍTULO
            </Text>
          </Th>
          <Th
            color="#D2CDCC"
            borderBottom="1px"
            borderBottomColor="#5F6762"
            _hover={{ cursor: "context-menu", color: "white" }}
          >
            ÁLBUM
          </Th>
          <Th
            color="#D2CDCC"
            isTruncated
            borderBottom="1px"
            borderBottomColor="#5F6762"
            _hover={{ cursor: "context-menu", color: "white" }}
          >
            FECHA INCORPORACIÓN
          </Th>
          <Th
            w="50px"
            color="#D2CDCC"
            borderBottom="1px"
            borderBottomColor="#5F6762"
            px={0}
            textAlign="center"
          />
          <Th
            w="50px"
            color="#D2CDCC"
            borderBottom="1px"
            borderBottomColor="#5F6762"
            px={0}
            textAlign="center"
          >
            <Icon
              boxSize="20px"
              as={BiTime}
              _hover={{ cursor: "context-menu", color: "white" }}
            ></Icon>
          </Th>
          <Th
            w="50px"
            color="#D2CDCC"
            borderBottom="1px"
            borderBottomColor="#5F6762"
            px={0}
            textAlign="center"
          />
        </Tr>
      </Thead>
      <Tbody color="#D2CDCC" fontSize="14px">
        {items?.items?.map((item, index) => (
          <Row key={item?.track?.id} member={item} index={index} />
        ))}
      </Tbody>
    </Table>
  );
};

export default MemberTable;

