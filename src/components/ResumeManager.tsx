
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ResumeManagerProps {
  isEditing?: boolean;
}

const ResumeManager: React.FC<ResumeManagerProps> = ({ isEditing = false }) => {
  const [resumeFile, setResumeFile] = useState<string | null>(localStorage.getItem('resumeUrl'));
  
  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      localStorage.setItem('resumeUrl', fileUrl);
      localStorage.setItem('resumeName', file.name);
      setResumeFile(fileUrl);
      toast({
        title: "Resume uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
  };
  
  const handleDownload = () => {
    const resumeUrl = localStorage.getItem('resumeUrl');
    const resumeName = localStorage.getItem('resumeName') || 'resume.pdf';
    
    if (resumeUrl) {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = resumeName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      toast({
        title: "No resume available",
        description: "Please upload a resume first.",
        variant: "destructive",
      });
    }
  };

  if (isEditing) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('resume-upload')?.click()}
          >
            Upload Resume
          </Button>
          <input
            type="file"
            id="resume-upload"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
          />
          {resumeFile && <span className="text-sm text-green-600">Resume uploaded</span>}
        </div>
        {resumeFile && (
          <Button 
            variant="secondary" 
            onClick={handleDownload}
            className="mt-2"
          >
            <Download className="mr-2 h-4 w-4" />
            Preview Resume
          </Button>
        )}
      </div>
    );
  }
  
  return (
    <Button 
      onClick={handleDownload}
      variant="outline" 
      className="border-white/30 text-white hover:bg-white hover:text-bengali-dark"
    >
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </Button>
  );
};

export default ResumeManager;
