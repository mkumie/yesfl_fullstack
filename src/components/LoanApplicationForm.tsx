import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ClientFeedbackForm } from "./ClientFeedbackForm";
import { LoanFormContent } from "./loan-form/LoanFormContent";
import { LoanApplicationProvider } from "@/contexts/LoanApplicationContext";
import { Card, CardContent } from "@/components/ui/card";

export const LoanApplicationForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const showFeedback = searchParams.get('showFeedback') === 'true';

  const handleFeedbackClose = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showFeedback ? (
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent>
              <ClientFeedbackForm onClose={handleFeedbackClose} />
            </CardContent>
          </Card>
        </div>
      ) : (
        <LoanApplicationProvider>
          <LoanFormContent />
        </LoanApplicationProvider>
      )}
    </div>
  );
};