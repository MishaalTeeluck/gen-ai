import { FileUpload, Icon, Box } from '@chakra-ui/react';
import { LuUpload } from 'react-icons/lu';
import { useDropzoneHandlers } from './Dropzone.container';

export const DropzoneComponent = () => {
  const handlers = useDropzoneHandlers();

  return (
    <FileUpload.Root
      maxW='xl'
      alignItems='stretch'
      maxFiles={1}
      accept={[
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/*',
      ]}
      onFileChange={({ acceptedFiles }) => handlers.handleFiles(acceptedFiles)}
      onFileReject={() => handlers.handleRejection()}
    >
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone>
        <Icon as={LuUpload} size='xl' color='fg.muted' />
        <FileUpload.DropzoneContent>
          <Box>Drag and drop it here</Box>
          <Box color='fg.muted'>or choose a file</Box>
        </FileUpload.DropzoneContent>
        <Box mt={3} width='100%'>
          <FileUpload.List clearable showSize />
        </Box>
      </FileUpload.Dropzone>
    </FileUpload.Root>
  );
};
