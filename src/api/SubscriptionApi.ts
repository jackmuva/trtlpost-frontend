import StandardApi from "./StandardApi.js";
import {Subscription} from "@/types/Subscription.ts";

class SubscriptionApi extends StandardApi{
    postNewSubscription(subscription: Subscription){
        return this.post('/api/subscription/new', subscription)?.then((response: Response) => response.json());
    }
    deleteSubscription(email: string, seriesId: number){
        return this.delete(`/api/subscription/cancelSubscription/${email}/${seriesId}`)?.then((response: Response) => response.json());
    }

}
export default new SubscriptionApi();