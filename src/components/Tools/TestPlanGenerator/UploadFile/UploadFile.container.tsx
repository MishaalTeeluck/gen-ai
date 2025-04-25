import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const UploadFileContainer = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    if (uploadedFile) {
      navigate('/tools/testplangenerator/result');
    } else {
      toast.error('Please upload a file first.');
    }
  };

  return {
    setUploadedFile,
    handleGenerateClick,
  };
};