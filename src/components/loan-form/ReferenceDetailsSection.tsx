import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ReferenceDetailsSectionProps {
  formData: {
    referenceFullName: string;
    referenceRelationship: string;
    referenceAddress: string;
    referencePhone: string;
    referenceOccupation: string;
  };
  setFormData: (data: any) => void;
  validationErrors: Record<string, string>;
}

export const ReferenceDetailsSection = ({
  formData,
  setFormData,
  validationErrors,
}: ReferenceDetailsSectionProps) => {
  return (
    <Card>
      <CardHeader className="bg-primary text-white">
        <CardTitle>Reference Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="space-y-2">
          <Label htmlFor="referenceFullName">Full Name</Label>
          <Input
            id="referenceFullName"
            value={formData.referenceFullName}
            onChange={(e) =>
              setFormData({ ...formData, referenceFullName: e.target.value })
            }
            error={!!validationErrors.referenceFullName}
            errorMessage={validationErrors.referenceFullName}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="referenceRelationship">Relationship to Applicant</Label>
          <Input
            id="referenceRelationship"
            value={formData.referenceRelationship}
            onChange={(e) =>
              setFormData({ ...formData, referenceRelationship: e.target.value })
            }
            error={!!validationErrors.referenceRelationship}
            errorMessage={validationErrors.referenceRelationship}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="referencePhone">Contact Number</Label>
          <Input
            id="referencePhone"
            type="tel"
            value={formData.referencePhone}
            onChange={(e) =>
              setFormData({ ...formData, referencePhone: e.target.value })
            }
            error={!!validationErrors.referencePhone}
            errorMessage={validationErrors.referencePhone}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="referenceOccupation">Occupation</Label>
          <Input
            id="referenceOccupation"
            value={formData.referenceOccupation}
            onChange={(e) =>
              setFormData({ ...formData, referenceOccupation: e.target.value })
            }
            error={!!validationErrors.referenceOccupation}
            errorMessage={validationErrors.referenceOccupation}
          />
        </div>

        <div className="col-span-2 space-y-2">
          <Label htmlFor="referenceAddress">Address</Label>
          <Input
            id="referenceAddress"
            value={formData.referenceAddress}
            onChange={(e) =>
              setFormData({ ...formData, referenceAddress: e.target.value })
            }
            error={!!validationErrors.referenceAddress}
            errorMessage={validationErrors.referenceAddress}
          />
        </div>
      </CardContent>
    </Card>
  );
};