<?php

namespace Modules\Shop\Repositories\Front\Interfaces;

use App\Models\User;
use Modules\Shop\Entities\Cart;
use Modules\Shop\Entities\CartItem;
use Modules\Shop\Entities\Product;


interface CartRepositoryInterface
{
    public function findByUser(User $user): CarT;
    public function addItem(Product $product, $qty): CartItem;
    public function removeItem($id): bool;
    public function updateQty($tems = []): void;

}
