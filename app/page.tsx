"use client"
import Todo from "./components/Todo";
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
       <Todo />
    </ChakraProvider>
  )
}
