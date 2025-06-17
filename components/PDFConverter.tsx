import { Box, Button, Input, VStack, Text, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { PDFDocument } from "pdf-lib"
import { saveAs } from "file-saver"

export default function PDFConverter() {
  const [file, setFile] = useState<File | null>(null)
  const toast = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const convertPDF = async () => {
    if (!file) return

    try {
      const existingPdfBytes = await file.arrayBuffer()
      const pdfDoc = await PDFDocument.load(existingPdfBytes)
      pdfDoc.setTitle("Converted PDF")

      const pdfBytes = await pdfDoc.save()
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" })

      saveAs(blob, `converted-${file.name}`)
      toast({ title: "PDF Converted", status: "success", duration: 2000 })
    } catch (err) {
      console.error(err)
      toast({ title: "Conversion failed", status: "error", duration: 2000 })
    }
  }

  return (
   <VStack spacing={4} p={6} w="full" maxW="md" mx="auto" bg="gray.100" _dark={{ bg: "gray.700" }} rounded="xl" shadow="xl">
      <Text fontSize="xl" fontWeight="bold">PDF Converter</Text>
      <Input type="file" accept="application/pdf" onChange={handleFileChange} />
      <Button colorScheme="blue" onClick={convertPDF} isDisabled={!file}>
        Convert & Download
      </Button>
    </VStack>
  )
}
