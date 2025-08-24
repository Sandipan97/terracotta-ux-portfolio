import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
interface BusinessMetric {
  icon: any;
  label: string;
  value: string;
  improvement: string;
  color: string;
}
interface BusinessImpactCardProps {
  title: string;
  description: string;
  metrics: BusinessMetric[];
  projectType: string;
  industry: string;
}
const BusinessImpactCard = ({
  title,
  description,
  metrics,
  projectType,
  industry
}: BusinessImpactCardProps) => {
  return;
};
export default BusinessImpactCard;