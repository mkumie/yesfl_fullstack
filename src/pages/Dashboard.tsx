import { useNavigate } from "react-router-dom";
import { useSessionCheck } from "@/hooks/useSessionCheck";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Navigation } from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const { session, userEmail, isAdmin } = useSessionCheck();

  const { data: profile } = useQuery({
    queryKey: ["profile", session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      
      const { data, error } = await supabase
        .from("profiles")
        .select("first_name, surname")
        .eq("id", session.user.id)
        .single();
      
      if (error) {
        console.error("Error fetching profile:", error);
        toast.error("Error loading profile data");
        return null;
      }
      
      return data;
    },
    enabled: !!session?.user?.id,
  });

  const handleSignOut = async () => {
    try {
      // Clear any local storage or session storage data
      localStorage.clear();
      sessionStorage.clear();
      
      // Sign out from Supabase
      await supabase.auth.signOut();
      
      // Clear any query cache if needed
      window.location.href = '/login';
    } catch (error) {
      console.error("Error during sign out:", error);
      navigate("/login");
    }
  };

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-6 pt-24">
        <DashboardHeader
          userEmail={userEmail}
          firstName={profile?.first_name}
          surname={profile?.surname}
          isAdmin={isAdmin}
          onSignOut={handleSignOut}
        />
        <DashboardContent isAdmin={isAdmin} />
      </div>
    </div>
  );
};

export default Dashboard;