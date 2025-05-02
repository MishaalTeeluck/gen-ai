import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setHeaderTitle } from '../../../../store/headerSlice';

export const UploadFileContainer = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle('Test Plan Generator : Upload Document'));
  }, [dispatch]);

  const handleGenerateClick = async () => {
    if (!uploadedFile) {
      toast.error('Please upload a document before proceeding.');
      return;
    }

    if (uploadedFile.size === 0) {
      toast.error('The uploaded file is empty. Please select a valid file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', uploadedFile);

      const response = await fetch('/api/upload-excel', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        toast.error(`Upload failed: ${errorText || 'Server error occurred'}`);
        return;
      }

      toast.success('✅ File uploaded successfully! Processing started...');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsUploading(true);
    }
  };

  const navigateToHistory = () => {
    navigate('/tools/testplangenerator/history');
  };

  const handleNewUpload = () => {
    setUploadedFile(null);
    setIsUploading(false);
  };

  return {
    navigateToHistory,
    setUploadedFile,
    handleGenerateClick,
    isUploading,
    handleNewUpload,
  };
};
